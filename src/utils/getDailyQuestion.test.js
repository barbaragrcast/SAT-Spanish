/**
 * Tests for the date-seed daily question selection algorithm.
 *
 * Critical invariants:
 *  1. Determinism  — same date + same tipo always returns the same question.
 *  2. Isolation    — RW and Math produce different questions on the same date.
 *  3. Coverage     — every question in the pool appears at least once across N days.
 *  4. Bounds       — the returned question is always a member of the input pool.
 *  5. Edge cases   — empty pool returns null; wrong tipo returns null.
 */

import { describe, it, expect } from 'vitest';
import { getDailyQuestion } from './getDailyQuestion.js';

// Minimal question fixtures — shape matches questions.js but contents are irrelevant.
const makeQ = (id, tipo) => ({
  id,
  tipo,
  modulo: 1,
  dificultad: 'medio',
  dominio: 'Test',
  habilidad: 'Test',
  enunciado: { es: 'e', en: 'e' },
  opciones: [],
  respuestaCorrecta: 'A',
  explicacion: { es: 'e', en: 'e' },
  calculadora: false,
  expresionDesmos: null,
});

const RW_POOL  = Array.from({ length: 16 }, (_, i) => makeQ(`rw-${i}`, 'lectura-escritura'));
const MAT_POOL = Array.from({ length: 15 }, (_, i) => makeQ(`mat-${i}`, 'matematicas'));
const ALL      = [...RW_POOL, ...MAT_POOL];

const date = (y, m, d) => new Date(y, m - 1, d);

// ── 1. Determinism ────────────────────────────────────────────────────────────

describe('getDailyQuestion — determinism', () => {
  it('returns the same question when called twice with the same date', () => {
    const d = date(2026, 5, 25);
    const q1 = getDailyQuestion(ALL, 'lectura-escritura', d);
    const q2 = getDailyQuestion(ALL, 'lectura-escritura', d);
    expect(q1.id).toBe(q2.id);
  });

  it('returns the same question when called twice with the same date (Math)', () => {
    const d = date(2026, 5, 25);
    const q1 = getDailyQuestion(ALL, 'matematicas', d);
    const q2 = getDailyQuestion(ALL, 'matematicas', d);
    expect(q1.id).toBe(q2.id);
  });
});

// ── 2. Section isolation ──────────────────────────────────────────────────────

describe('getDailyQuestion — section isolation', () => {
  it('R&W and Math pick different questions on the same date', () => {
    const d = date(2026, 5, 25);
    const rw  = getDailyQuestion(ALL, 'lectura-escritura', d);
    const mat = getDailyQuestion(ALL, 'matematicas', d);
    // They can't share an id — one is from RW_POOL, one from MAT_POOL,
    // and the section salt ensures the hash spaces are independent.
    expect(rw.tipo).toBe('lectura-escritura');
    expect(mat.tipo).toBe('matematicas');
    expect(rw.id).not.toBe(mat.id);
  });
});

// ── 3. Pool coverage ──────────────────────────────────────────────────────────

describe('getDailyQuestion — full pool coverage', () => {
  it('visits every R&W question at least once across 365 consecutive days', () => {
    const seen = new Set();
    const start = date(2026, 1, 1);
    for (let i = 0; i < 365; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      seen.add(getDailyQuestion(ALL, 'lectura-escritura', d).id);
    }
    for (const q of RW_POOL) {
      expect(seen.has(q.id), `Expected rw question ${q.id} to appear in 365 days`).toBe(true);
    }
  });

  it('visits every Math question at least once across 365 consecutive days', () => {
    const seen = new Set();
    const start = date(2026, 1, 1);
    for (let i = 0; i < 365; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      seen.add(getDailyQuestion(ALL, 'matematicas', d).id);
    }
    for (const q of MAT_POOL) {
      expect(seen.has(q.id), `Expected math question ${q.id} to appear in 365 days`).toBe(true);
    }
  });
});

// ── 4. Bounds ─────────────────────────────────────────────────────────────────

describe('getDailyQuestion — result is always in the pool', () => {
  it('never returns a question outside the filtered pool', () => {
    const rwIds = new Set(RW_POOL.map(q => q.id));
    for (let day = 1; day <= 30; day++) {
      const q = getDailyQuestion(ALL, 'lectura-escritura', date(2026, 5, day));
      expect(rwIds.has(q.id)).toBe(true);
    }
  });
});

// ── 5. Edge cases ─────────────────────────────────────────────────────────────

describe('getDailyQuestion — edge cases', () => {
  it('returns null when the pool has no questions', () => {
    expect(getDailyQuestion([], 'matematicas', date(2026, 5, 25))).toBeNull();
  });

  it('returns null when no questions match the requested tipo', () => {
    const rwOnly = RW_POOL;
    expect(getDailyQuestion(rwOnly, 'matematicas', date(2026, 5, 25))).toBeNull();
  });

  it('returns the only available question when pool has exactly one entry', () => {
    const single = [makeQ('solo', 'matematicas')];
    for (let d = 1; d <= 10; d++) {
      expect(getDailyQuestion(single, 'matematicas', date(2026, 5, d)).id).toBe('solo');
    }
  });
});
