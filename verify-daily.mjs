/**
 * verify-daily.mjs
 * Verifies that getDailyQuestion is pure and produces distinct questions
 * for today, tomorrow, and a date 31 days out.
 *
 * Run: node verify-daily.mjs
 */

import { preguntas } from './src/data/questions.js';
import { getDailyQuestion } from './src/utils/getDailyQuestion.js';

const SECCIONES = ['lectura-escritura', 'matematicas'];

// Three test dates
const hoy     = new Date(2026, 4, 25);   // May 25 2026
const manana  = new Date(2026, 4, 26);   // May 26 2026
const plus31  = new Date(2026, 5, 25);   // Jun 25 2026  (31 days out)

const fechas = [
  { etiqueta: 'Hoy        (May 25)', fecha: hoy },
  { etiqueta: 'Mañana     (May 26)', fecha: manana },
  { etiqueta: '+31 días   (Jun 25)', fecha: plus31 },
];

let totalErrores = 0;

for (const tipo of SECCIONES) {
  console.log(`\n══ ${tipo.toUpperCase()} ══`);

  const resultados = fechas.map(({ etiqueta, fecha }) => {
    const q = getDailyQuestion(preguntas, tipo, fecha);
    return { etiqueta, fecha, q };
  });

  // Print each result
  resultados.forEach(({ etiqueta, q }) => {
    if (!q) {
      console.log(`  ${etiqueta} → ⚠️  null (empty pool)`);
    } else {
      console.log(`  ${etiqueta} → [${q.id}]  ${q.dificultad.padEnd(6)}  ${q.habilidad}`);
    }
  });

  // ── Test 1: All three dates return DIFFERENT questions ──────────────────
  const ids = resultados.map(r => r.q?.id);
  const uniqueIds = new Set(ids);
  const allDifferent = uniqueIds.size === ids.length && !ids.includes(undefined);

  if (allDifferent) {
    console.log(`  ✓ Las tres fechas devuelven preguntas distintas`);
  } else {
    console.log(`  ✗ COLISIÓN detectada: ${ids.join(', ')}`);
    totalErrores++;
  }

  // ── Test 2: Purity — same date always returns the same question ─────────
  const q1a = getDailyQuestion(preguntas, tipo, hoy);
  const q1b = getDailyQuestion(preguntas, tipo, hoy);
  const q1c = getDailyQuestion(preguntas, tipo, hoy);

  if (q1a?.id === q1b?.id && q1b?.id === q1c?.id) {
    console.log(`  ✓ Función pura: misma fecha → mismo resultado (×3 llamadas)`);
  } else {
    console.log(`  ✗ NO ES PURA: ${q1a?.id}, ${q1b?.id}, ${q1c?.id}`);
    totalErrores++;
  }

  // ── Test 3: RW and Math return independent questions on the same date ───
}

// ── Cross-section independence check ───────────────────────────────────────
console.log('\n══ INDEPENDENCIA ENTRE SECCIONES ══');
const qRW   = getDailyQuestion(preguntas, 'lectura-escritura', hoy);
const qMath = getDailyQuestion(preguntas, 'matematicas', hoy);
if (qRW?.tipo !== qMath?.tipo) {
  console.log(`  ✓ Secciones independientes: RW=[${qRW?.id}]  MAT=[${qMath?.id}]`);
} else {
  console.log(`  ✗ Misma sección devuelta para ambos tipos`);
  totalErrores++;
}

// ── Summary ─────────────────────────────────────────────────────────────────
console.log(`\n${'─'.repeat(52)}`);
if (totalErrores === 0) {
  console.log('✓ Todas las verificaciones pasaron');
} else {
  console.log(`✗ ${totalErrores} verificación(es) fallaron`);
  process.exit(1);
}
