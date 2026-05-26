/**
 * copy.js — Single source of truth for all bilingual UI strings.
 *
 * Rules:
 *  - Keys are camelCase English slugs.
 *  - Values are always { es: string, en: string }.
 *  - Never hardcode Spanish or English text in JSX — always use t('key').
 *  - Add new keys here before using them in a component.
 */

export const copy = {
  // ── Navigation ──────────────────────────────────────────────────────────────
  preguntaDelDia: {
    es: 'Pregunta del Día',
    en: 'Question of the Day',
  },
  practica: {
    es: 'Práctica',
    en: 'Practice',
  },
  bancoDePpreguntas: {
    es: 'Banco de Preguntas',
    en: 'Question Bank',
  },
  miProgreso: {
    es: 'Mi Progreso',
    en: 'My Progress',
  },

  // ── Language toggle ─────────────────────────────────────────────────────────
  cambiarIdioma: {
    es: 'Switch to English',
    en: 'Cambiar a Español',
  },

  // ── Question UI ─────────────────────────────────────────────────────────────
  lecturaYEscritura: {
    es: 'Lectura y Escritura',
    en: 'Reading & Writing',
  },
  matematicas: {
    es: 'Matemáticas',
    en: 'Math',
  },
  verificarRespuesta: {
    es: 'Verificar respuesta',
    en: 'Check answer',
  },
  explicameMas: {
    es: 'Explícame más',
    en: 'Explain more',
  },
  respuestaCorrecta: {
    es: '¡Correcto!',
    en: 'Correct!',
  },
  respuestaIncorrecta: {
    es: 'Incorrecto. La respuesta correcta es',
    en: 'Incorrect. The correct answer is',
  },
  explicacion: {
    es: 'Explicación',
    en: 'Explanation',
  },

  // ── Difficulty labels ───────────────────────────────────────────────────────
  facil: {
    es: 'Fácil',
    en: 'Easy',
  },
  medio: {
    es: 'Medio',
    en: 'Medium',
  },
  dificil: {
    es: 'Difícil',
    en: 'Hard',
  },

  // ── Streak / progress ───────────────────────────────────────────────────────
  racha: {
    es: 'Racha',
    en: 'Streak',
  },
  dias: {
    es: 'días',
    en: 'days',
  },
  precision: {
    es: 'Precisión',
    en: 'Accuracy',
  },

  // ── Error / loading states ──────────────────────────────────────────────────
  cargando: {
    es: 'Cargando…',
    en: 'Loading…',
  },
  errorGenerico: {
    es: 'Algo salió mal. Por favor intenta de nuevo.',
    en: 'Something went wrong. Please try again.',
  },
  sinPreguntas: {
    es: 'No hay preguntas disponibles por ahora.',
    en: 'No questions available right now.',
  },
};
