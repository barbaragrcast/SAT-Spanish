// @vitest-environment jsdom
/**
 * Tests for the localStorage-backed progress utilities.
 *
 * Critical invariants:
 *  1. Streak   — calcularRacha counts consecutive days ending today; gaps reset to 0.
 *  2. Accuracy — calcularPrecisionPorSeccion computes correct percentages per section.
 *  3. Daily lock — yaRespondioHoy returns true only after registrarDiaria is called today.
 *  4. History  — obtenerHistorial7Dias returns exactly 7 entries, oldest first.
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  calcularRacha,
  calcularPrecisionPorSeccion,
  obtenerHistorial7Dias,
  registrarDiaria,
  yaRespondioHoy,
  obtenerDiaria,
} from './progreso.js';

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Build a minimal session object for testing. */
function sess(fecha, seccion = 'lectura-escritura', correctas = 1, total = 1) {
  return { id: fecha, fecha, seccion, tipo: 'diaria', correctas, total, segundos: 30, ts: 0 };
}

/** Returns a 'YYYY-MM-DD' string for today minus n days (local time). */
function dayMinus(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  const m  = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${dd}`;
}

const TODAY     = dayMinus(0);
const YESTERDAY = dayMinus(1);
const TWO_AGO   = dayMinus(2);

// ── Reset localStorage before every test ─────────────────────────────────────

beforeEach(() => {
  localStorage.clear();
});

// ── 1. Streak ─────────────────────────────────────────────────────────────────

describe('calcularRacha', () => {
  it('returns 0 for an empty session list', () => {
    expect(calcularRacha([])).toBe(0);
  });

  it('returns 0 when the most recent session was yesterday (no session today)', () => {
    expect(calcularRacha([sess(YESTERDAY)])).toBe(0);
  });

  it('returns 1 when there is only a session today', () => {
    expect(calcularRacha([sess(TODAY)])).toBe(1);
  });

  it('returns 2 for sessions today and yesterday', () => {
    expect(calcularRacha([sess(TODAY), sess(YESTERDAY)])).toBe(2);
  });

  it('returns 3 for three consecutive days ending today', () => {
    expect(calcularRacha([sess(TODAY), sess(YESTERDAY), sess(TWO_AGO)])).toBe(3);
  });

  it('stops counting when there is a gap in the streak', () => {
    // Today + two days ago, but NOT yesterday — streak should be 1
    expect(calcularRacha([sess(TODAY), sess(TWO_AGO)])).toBe(1);
  });

  it('counts correctly when multiple sessions exist on the same day', () => {
    // Two sessions today should still count as racha = 1 (not 2)
    expect(calcularRacha([sess(TODAY), sess(TODAY)])).toBe(1);
  });
});

// ── 2. Accuracy ───────────────────────────────────────────────────────────────

describe('calcularPrecisionPorSeccion', () => {
  it('returns null pct for both sections when there are no sessions', () => {
    const result = calcularPrecisionPorSeccion([]);
    expect(result.find(r => r.seccion === 'lectura-escritura').pct).toBeNull();
    expect(result.find(r => r.seccion === 'matematicas').pct).toBeNull();
  });

  it('returns 100% when every answer is correct for a section', () => {
    const sessions = [
      sess(TODAY, 'lectura-escritura', 1, 1),
      sess(YESTERDAY, 'lectura-escritura', 1, 1),
    ];
    const rw = calcularPrecisionPorSeccion(sessions).find(r => r.seccion === 'lectura-escritura');
    expect(rw.pct).toBe(100);
  });

  it('returns 0% when all answers are wrong', () => {
    const sessions = [sess(TODAY, 'matematicas', 0, 1)];
    const mat = calcularPrecisionPorSeccion(sessions).find(r => r.seccion === 'matematicas');
    expect(mat.pct).toBe(0);
  });

  it('computes accuracy independently per section', () => {
    const sessions = [
      sess(TODAY, 'lectura-escritura', 3, 4),   // 75%
      sess(TODAY, 'matematicas',       1, 2),   // 50%
    ];
    const result = calcularPrecisionPorSeccion(sessions);
    const rw  = result.find(r => r.seccion === 'lectura-escritura');
    const mat = result.find(r => r.seccion === 'matematicas');
    expect(rw.pct).toBe(75);
    expect(mat.pct).toBe(50);
  });

  it('rounds to the nearest integer', () => {
    // 1/3 ≈ 33.33% → rounds to 33
    const sessions = [sess(TODAY, 'lectura-escritura', 1, 3)];
    const rw = calcularPrecisionPorSeccion(sessions).find(r => r.seccion === 'lectura-escritura');
    expect(rw.pct).toBe(33);
  });
});

// ── 3. Daily lock ─────────────────────────────────────────────────────────────

describe('daily lock (registrarDiaria / yaRespondioHoy)', () => {
  it('returns false before any answer is registered', () => {
    expect(yaRespondioHoy('lectura-escritura')).toBe(false);
  });

  it('returns true immediately after registering today\'s answer', () => {
    registrarDiaria('lectura-escritura', 'B', true);
    expect(yaRespondioHoy('lectura-escritura')).toBe(true);
  });

  it('stores the correct seleccion and correcta values', () => {
    registrarDiaria('matematicas', 'C', false);
    const diaria = obtenerDiaria();
    expect(diaria['matematicas'].seleccion).toBe('C');
    expect(diaria['matematicas'].correcta).toBe(false);
  });

  it('locking one section does not lock the other', () => {
    registrarDiaria('lectura-escritura', 'A', true);
    expect(yaRespondioHoy('lectura-escritura')).toBe(true);
    expect(yaRespondioHoy('matematicas')).toBe(false);
  });
});

// ── 4. 7-day history ──────────────────────────────────────────────────────────

describe('obtenerHistorial7Dias', () => {
  it('always returns exactly 7 entries', () => {
    expect(obtenerHistorial7Dias([])).toHaveLength(7);
    expect(obtenerHistorial7Dias([sess(TODAY)])).toHaveLength(7);
  });

  it('returns entries ordered oldest → newest (index 0 is 6 days ago)', () => {
    const history = obtenerHistorial7Dias([]);
    expect(history[6].fecha).toBe(TODAY);
    expect(history[0].fecha).toBe(dayMinus(6));
  });

  it('shows null pct for days with no activity', () => {
    const history = obtenerHistorial7Dias([]);
    expect(history.every(h => h.pct === null)).toBe(true);
  });

  it('shows correct pct for today when a session exists', () => {
    const sessions = [sess(TODAY, 'lectura-escritura', 1, 1)];
    const history  = obtenerHistorial7Dias(sessions);
    expect(history[6].pct).toBe(100);
    expect(history[6].total).toBe(1);
  });

  it('aggregates multiple sessions on the same day', () => {
    const sessions = [
      sess(TODAY, 'lectura-escritura', 1, 1),
      sess(TODAY, 'matematicas',       0, 1),
    ];
    const history = obtenerHistorial7Dias(sessions);
    // 1 correct out of 2 total = 50%
    expect(history[6].pct).toBe(50);
    expect(history[6].total).toBe(2);
  });
});
