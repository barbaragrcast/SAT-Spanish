/**
 * progreso.js — localStorage persistence for question sessions.
 *
 * Storage keys:
 *   'sat_sesiones'  → JSON array of session objects (append-only)
 *   'racha'         → cached streak integer (updated on every save)
 *
 * Session shape:
 *   { id, fecha, seccion, tipo, correctas, total, segundos, ts }
 *
 * All date math uses local time ('YYYY-MM-DD') to avoid UTC timezone shifts.
 */

const CLAVE_SESIONES = 'sat_sesiones';
const CLAVE_RACHA    = 'racha';
const CLAVE_DIARIA   = 'sat_diaria';

// ── Date helpers ──────────────────────────────────────────────────────────────

/** Returns today's date as 'YYYY-MM-DD' in local time. */
function fechaHoy() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${dd}`;
}

/**
 * Subtracts n days from a 'YYYY-MM-DD' string.
 * Parses at noon to avoid daylight-saving boundary errors.
 */
function restarDias(fechaStr, n) {
  const d = new Date(`${fechaStr}T12:00:00`);
  d.setDate(d.getDate() - n);
  const m  = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${dd}`;
}

// ── Core read / write ─────────────────────────────────────────────────────────

/** Returns all stored sessions (safe: returns [] on parse error). */
export function obtenerSesiones() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_SESIONES) ?? '[]');
  } catch {
    return [];
  }
}

/**
 * Appends one session and refreshes the cached streak.
 *
 * @param {{ seccion: string, tipo: 'diaria'|'examen', correctas: number, total: number, segundos: number }} datos
 * @returns {number} updated streak count
 */
export function guardarSesion({ seccion, tipo, correctas, total, segundos }) {
  const sesiones = obtenerSesiones();
  sesiones.push({
    id:        Date.now().toString(36),
    fecha:     fechaHoy(),
    seccion,
    tipo,
    correctas,
    total,
    segundos,
    ts:        Date.now(),
  });
  localStorage.setItem(CLAVE_SESIONES, JSON.stringify(sesiones));

  // Keep the cached 'racha' key in sync so PantallaInicio reads it immediately
  const racha = calcularRacha(sesiones);
  localStorage.setItem(CLAVE_RACHA, String(racha));
  return racha;
}

// ── Daily question lock ───────────────────────────────────────────────────────

/**
 * Returns the stored daily answers object:
 * { 'lectura-escritura': { fecha, seleccion, correcta }, 'matematicas': { ... } }
 */
export function obtenerDiaria() {
  try { return JSON.parse(localStorage.getItem(CLAVE_DIARIA) ?? '{}'); }
  catch { return {}; }
}

/**
 * Saves today's daily answer for a section.
 * Safe to call multiple times — only the first call per section per day matters
 * (callers should check yaRespondioHoy before calling this).
 */
export function registrarDiaria(seccion, seleccion, correcta) {
  const diaria = obtenerDiaria();
  diaria[seccion] = { fecha: fechaHoy(), seleccion, correcta };
  localStorage.setItem(CLAVE_DIARIA, JSON.stringify(diaria));
}

/** Returns true if the user already answered the daily question for this section today. */
export function yaRespondioHoy(seccion) {
  return obtenerDiaria()[seccion]?.fecha === fechaHoy();
}

// ── Derived stats ─────────────────────────────────────────────────────────────

/**
 * Counts consecutive days ending with today that have at least one session.
 * Returns 0 if nothing was done today.
 */
export function calcularRacha(sesiones) {
  const activas = new Set(sesiones.map(s => s.fecha));
  let racha = 0;
  let fecha = fechaHoy();
  while (activas.has(fecha)) {
    racha++;
    fecha = restarDias(fecha, 1);
  }
  return racha;
}

/**
 * Returns accuracy stats per section.
 * pct is null when no sessions exist for that section.
 */
export function calcularPrecisionPorSeccion(sesiones) {
  return ['lectura-escritura', 'matematicas'].map(seccion => {
    const filtradas = sesiones.filter(s => s.seccion === seccion);
    const correctas = filtradas.reduce((a, s) => a + s.correctas, 0);
    const total     = filtradas.reduce((a, s) => a + s.total,     0);
    return {
      seccion,
      correctas,
      total,
      pct: total > 0 ? Math.round((correctas / total) * 100) : null,
    };
  });
}

/**
 * Returns the last 7 days (oldest → newest) with accuracy data for each day.
 * pct is null for days with no activity.
 */
export function obtenerHistorial7Dias(sesiones) {
  const hoy = fechaHoy();
  return Array.from({ length: 7 }, (_, i) => {
    const fecha     = restarDias(hoy, 6 - i);
    const del       = sesiones.filter(s => s.fecha === fecha);
    const correctas = del.reduce((a, s) => a + s.correctas, 0);
    const total     = del.reduce((a, s) => a + s.total,     0);
    return { fecha, pct: total > 0 ? Math.round((correctas / total) * 100) : null, total };
  });
}
