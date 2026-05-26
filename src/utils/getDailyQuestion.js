/**
 * getDailyQuestion.js
 *
 * Pure function — no side effects, no imports from outside this file.
 * All daily question selection logic lives here.
 *
 * Algorithm:
 *   semilla = YYYYMMDD as an integer  (e.g. 20260525)
 *   indice  = semilla % filtradas.length
 *
 * The same seed produces the same question for every user on the same
 * calendar day and rotates through the full pool as days advance.
 * Injecting `fecha` makes the function fully unit-testable without
 * mocking Date.
 *
 * @param {Array<Object>} preguntas  - Full question array from questions.js
 * @param {'lectura-escritura'|'matematicas'} tipo
 * @param {Date} [fecha=new Date()]  - Inject a specific date for testing
 * @returns {Object|null}            - The selected question, or null if pool is empty
 */
export function getDailyQuestion(preguntas, tipo, fecha = new Date()) {
  const filtradas = preguntas.filter((p) => p.tipo === tipo);

  if (filtradas.length === 0) return null;

  const semilla =
    fecha.getFullYear() * 10000 +
    (fecha.getMonth() + 1) * 100 +
    fecha.getDate();

  const indice = semilla % filtradas.length;

  return filtradas[indice];
}
