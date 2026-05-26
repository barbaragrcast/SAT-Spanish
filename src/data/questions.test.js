/**
 * Tests for the question data shape.
 *
 * These tests catch authoring mistakes before they reach users:
 *  1. Every question has all required fields with correct types.
 *  2. No duplicate IDs.
 *  3. respuestaCorrecta always matches one of the four opciones letters.
 *  4. All opciones have bilingual texto ({ es, en }).
 *  5. Valid tipo, modulo, dificultad enum values.
 */

import { describe, it, expect } from 'vitest';
import { preguntas } from './questions.js';

const VALID_TIPOS       = new Set(['lectura-escritura', 'matematicas']);
const VALID_MODULOS     = new Set([1, 2]);
const VALID_DIFICULTAD  = new Set(['facil', 'medio', 'dificil']);
const VALID_LETRAS      = new Set(['A', 'B', 'C', 'D']);

// ── 1. Required fields ────────────────────────────────────────────────────────

describe('question data — required fields', () => {
  it('every question has a non-empty string id', () => {
    for (const q of preguntas) {
      expect(typeof q.id, `q.id for ${q.id}`).toBe('string');
      expect(q.id.length, `q.id empty for ${q.id}`).toBeGreaterThan(0);
    }
  });

  it('every question has a valid tipo', () => {
    for (const q of preguntas) {
      expect(VALID_TIPOS.has(q.tipo), `Invalid tipo "${q.tipo}" on ${q.id}`).toBe(true);
    }
  });

  it('every question has a valid modulo (1 or 2)', () => {
    for (const q of preguntas) {
      expect(VALID_MODULOS.has(q.modulo), `Invalid modulo ${q.modulo} on ${q.id}`).toBe(true);
    }
  });

  it('every question has a valid dificultad', () => {
    for (const q of preguntas) {
      expect(VALID_DIFICULTAD.has(q.dificultad), `Invalid dificultad "${q.dificultad}" on ${q.id}`).toBe(true);
    }
  });

  it('every question has a non-empty dominio string', () => {
    for (const q of preguntas) {
      expect(typeof q.dominio).toBe('string');
      expect(q.dominio.trim().length, `Empty dominio on ${q.id}`).toBeGreaterThan(0);
    }
  });

  it('every question has a non-empty habilidad string', () => {
    for (const q of preguntas) {
      expect(typeof q.habilidad).toBe('string');
      expect(q.habilidad.trim().length, `Empty habilidad on ${q.id}`).toBeGreaterThan(0);
    }
  });

  it('every question has bilingual enunciado { es, en }', () => {
    for (const q of preguntas) {
      expect(typeof q.enunciado?.es, `Missing enunciado.es on ${q.id}`).toBe('string');
      expect(typeof q.enunciado?.en, `Missing enunciado.en on ${q.id}`).toBe('string');
      expect(q.enunciado.es.trim().length, `Empty enunciado.es on ${q.id}`).toBeGreaterThan(0);
      expect(q.enunciado.en.trim().length, `Empty enunciado.en on ${q.id}`).toBeGreaterThan(0);
    }
  });

  it('every question has bilingual explicacion { es, en }', () => {
    for (const q of preguntas) {
      expect(typeof q.explicacion?.es, `Missing explicacion.es on ${q.id}`).toBe('string');
      expect(typeof q.explicacion?.en, `Missing explicacion.en on ${q.id}`).toBe('string');
      expect(q.explicacion.es.trim().length, `Empty explicacion.es on ${q.id}`).toBeGreaterThan(0);
      expect(q.explicacion.en.trim().length, `Empty explicacion.en on ${q.id}`).toBeGreaterThan(0);
    }
  });

  it('every question has a boolean calculadora and null-or-string expresionDesmos', () => {
    for (const q of preguntas) {
      expect(typeof q.calculadora, `calculadora not boolean on ${q.id}`).toBe('boolean');
      expect(
        q.expresionDesmos === null || typeof q.expresionDesmos === 'string',
        `expresionDesmos invalid on ${q.id}`
      ).toBe(true);
    }
  });
});

// ── 2. Unique IDs ─────────────────────────────────────────────────────────────

describe('question data — unique IDs', () => {
  it('no two questions share the same id', () => {
    const ids  = preguntas.map(q => q.id);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(dupes, `Duplicate IDs found: ${dupes.join(', ')}`).toHaveLength(0);
  });
});

// ── 3. Answer integrity ───────────────────────────────────────────────────────

describe('question data — answer integrity', () => {
  it('respuestaCorrecta is always A, B, C, or D', () => {
    for (const q of preguntas) {
      expect(
        VALID_LETRAS.has(q.respuestaCorrecta),
        `Invalid respuestaCorrecta "${q.respuestaCorrecta}" on ${q.id}`
      ).toBe(true);
    }
  });

  it('respuestaCorrecta always matches one of the opciones letras', () => {
    for (const q of preguntas) {
      const letras = new Set((q.opciones ?? []).map(o => o.letra));
      expect(
        letras.has(q.respuestaCorrecta),
        `respuestaCorrecta "${q.respuestaCorrecta}" not in opciones on ${q.id}`
      ).toBe(true);
    }
  });
});

// ── 4. Options shape ──────────────────────────────────────────────────────────

describe('question data — options shape', () => {
  it('every question has exactly 4 opciones', () => {
    for (const q of preguntas) {
      expect(
        (q.opciones ?? []).length,
        `Expected 4 opciones on ${q.id}, got ${(q.opciones ?? []).length}`
      ).toBe(4);
    }
  });

  it('every option has a valid letra (A, B, C, D)', () => {
    for (const q of preguntas) {
      for (const o of q.opciones ?? []) {
        expect(
          VALID_LETRAS.has(o.letra),
          `Invalid opcion letra "${o.letra}" on ${q.id}`
        ).toBe(true);
      }
    }
  });

  it('every option has bilingual texto { es, en }', () => {
    for (const q of preguntas) {
      for (const o of q.opciones ?? []) {
        expect(typeof o.texto?.es, `Missing texto.es on ${q.id} opcion ${o.letra}`).toBe('string');
        expect(typeof o.texto?.en, `Missing texto.en on ${q.id} opcion ${o.letra}`).toBe('string');
        expect(o.texto.es.trim().length, `Empty texto.es on ${q.id} opcion ${o.letra}`).toBeGreaterThan(0);
        expect(o.texto.en.trim().length, `Empty texto.en on ${q.id} opcion ${o.letra}`).toBeGreaterThan(0);
      }
    }
  });

  it('each question has all four letters A, B, C, D exactly once', () => {
    for (const q of preguntas) {
      const letras = (q.opciones ?? []).map(o => o.letra).sort();
      expect(letras, `Options not exactly [A,B,C,D] on ${q.id}`).toEqual(['A', 'B', 'C', 'D']);
    }
  });
});

// ── 5. Sanity counts ─────────────────────────────────────────────────────────

describe('question data — sanity counts', () => {
  it('has at least 10 lectura-escritura questions', () => {
    const count = preguntas.filter(q => q.tipo === 'lectura-escritura').length;
    expect(count).toBeGreaterThanOrEqual(10);
  });

  it('has at least 10 matematicas questions', () => {
    const count = preguntas.filter(q => q.tipo === 'matematicas').length;
    expect(count).toBeGreaterThanOrEqual(10);
  });
});
