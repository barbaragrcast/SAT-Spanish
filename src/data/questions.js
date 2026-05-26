/**
 * questions.js — Official College Board question data.
 *
 * ⚠️  DO NOT modify question content, correct answers, or explanations
 *     without explicit instruction. This data represents official College
 *     Board material.
 *
 * Question shape:
 * {
 *   id:               string,                            // e.g. "rw-001", "mat-001"
 *   tipo:             'lectura-escritura' | 'matematicas',
 *   modulo:           1 | 2,                             // SAT module number
 *   dificultad:       'facil' | 'medio' | 'dificil',
 *   dominio:          string,                            // e.g. "Álgebra", "Lectura y comprensión"
 *   habilidad:        string,                            // specific skill tested
 *   enunciado:        { es: string, en: string },        // question stem
 *   opciones: [
 *     { letra: 'A' | 'B' | 'C' | 'D', texto: { es: string, en: string } }
 *   ],
 *   respuestaCorrecta: 'A' | 'B' | 'C' | 'D',
 *   explicacion:      { es: string, en: string },        // shown after answer is checked
 *   calculadora:      boolean,                           // true → Desmos renders (math only)
 *   expresionDesmos:  string | null,                     // optional pre-loaded Desmos expression
 * }
 */

/** @type {Array<Object>} */
export const preguntas = [];
