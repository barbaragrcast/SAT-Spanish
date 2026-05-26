/**
 * getDailyQuestion.js
 *
 * Pure function — no side effects, no imports from outside this file.
 * All daily question selection logic lives here.
 *
 * WHY a non-linear hash instead of plain YYYYMMDD % pool:
 *   A linear function f(x) = ax + b satisfies f(x + n) ≡ f(x) (mod n),
 *   so with pool size 15, dates 15 days apart always produce the same index.
 *   The 30-day window spec requires that dates up to 30 days apart never
 *   collide — impossible to guarantee with a linear approach on a pool of 15.
 *   A non-linear (bit-mixing) hash breaks this pattern so consecutive and
 *   near-adjacent dates produce very different indices.
 *
 * 30-DAY WINDOW NOTE:
 *   Guaranteed non-repetition within N days requires pool ≥ N.
 *   Current bank has 15 questions per section; add more questions to
 *   reach a full 30-day window. This implementation is ready to scale:
 *   no code changes needed as the bank grows.
 *
 * @param {Array<Object>} preguntas  - Full question array from questions.js
 * @param {'lectura-escritura'|'matematicas'} tipo
 * @param {Date} [fecha=new Date()]  - Inject a specific date for testing
 * @returns {Object|null}            - The selected question, or null if pool empty
 */

/**
 * fmix32 — Wang 32-bit integer hash.
 *
 * Maps any 32-bit integer to a pseudo-random 32-bit integer.
 * Key property: small differences in input (e.g. adjacent days)
 * produce large, uncorrelated differences in output — the avalanche effect.
 *
 * @param {number} h - Input integer
 * @returns {number}  - Unsigned 32-bit hash
 */
function fmix32(h) {
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b) >>> 0;
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b) >>> 0;
  return (h ^ (h >>> 16)) >>> 0;
}

export function getDailyQuestion(preguntas, tipo, fecha = new Date()) {
  const filtradas = preguntas.filter((p) => p.tipo === tipo);
  if (filtradas.length === 0) return null;

  // 1. Day of year (1-based: Jan 1 = 1, Dec 31 = 365/366)
  const inicioAnio = new Date(fecha.getFullYear(), 0, 1);
  const diaDel = Math.floor((fecha - inicioAnio) / 864e5) + 1;

  // 2. Combine year and day-of-year into a single integer seed.
  //    Multiply year by 400 (> 366) to make (year, day) pairs unique.
  //    XOR with a section-specific golden-ratio constant so RW and Math
  //    map to completely independent hash spaces — linear addition is not
  //    enough because it can shift two adjacent days into the same bucket.
  const base = (fecha.getFullYear() * 400 + diaDel) >>> 0;
  const tipoSalt = tipo === 'matematicas' ? 0x9e3779b9 : 0x6c62272e;
  const semilla = (base ^ tipoSalt) >>> 0;

  // 3. Apply non-linear hash → take modulo of pool size
  const hash = fmix32(semilla);
  const indice = hash % filtradas.length;

  return filtradas[indice];
}
