import { useLang } from '../hooks/useLang.js';
import {
  obtenerSesiones,
  calcularRacha,
  calcularPrecisionPorSeccion,
  obtenerHistorial7Dias,
} from '../utils/progreso.js';

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatearSegundos(seg) {
  const m = Math.floor(seg / 60);
  const s = seg % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

function colorBarra(pct) {
  if (pct === null) return 'bg-gray-100';
  if (pct >= 80)   return 'bg-green-500';
  if (pct >= 50)   return 'bg-amber-400';
  return 'bg-red-400';
}

// ── Sub-components ────────────────────────────────────────────────────────────

/** 7-day bar chart using inline height styles (dynamic % Tailwind can't express). */
function GraficoSieteDias({ historial, idioma }) {
  return (
    <div className="flex items-end justify-between gap-1 h-20">
      {historial.map(({ fecha, pct }) => {
        // Use noon to avoid DST timezone shifts in Intl
        const abrev = new Intl.DateTimeFormat(
          idioma === 'es' ? 'es-MX' : 'en-US',
          { weekday: 'short' }
        ).format(new Date(`${fecha}T12:00:00`));

        return (
          <div key={fecha} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex items-end" style={{ height: '60px' }}>
              <div
                className={`w-full rounded-t-md transition-all ${colorBarra(pct)}`}
                style={{ height: pct !== null ? `${Math.max(pct, 6)}%` : '4px' }}
                title={pct !== null ? `${pct}%` : '—'}
              />
            </div>
            <span className="text-xs text-gray-500 capitalize truncate w-full text-center">
              {abrev.replace('.', '')}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/** Accuracy card for one section. */
function TarjetaSeccion({ datos, labelKey }) {
  const { t } = useLang();
  const sinDatos = datos.pct === null;
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-1">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-600">
        {t(labelKey)}
      </p>
      <p className={`text-3xl font-black ${sinDatos ? 'text-gray-500' : 'text-gray-800'}`}>
        {sinDatos ? '—' : `${datos.pct}%`}
      </p>
      <p className="text-xs text-gray-500">
        {sinDatos
          ? t('sinHistorial')
          : `${datos.correctas} / ${datos.total} ${t('preguntasCorrectas')}`}
      </p>
    </div>
  );
}

/** Single row in the recent-sessions list. */
function FilaSesion({ sesion }) {
  const { t, idioma } = useLang();

  // Format date label
  const hoyStr  = new Date().toLocaleDateString('en-CA'); // 'YYYY-MM-DD'
  const ayerStr = (() => {
    const d = new Date(); d.setDate(d.getDate() - 1);
    return d.toLocaleDateString('en-CA');
  })();

  const fechaLabel =
    sesion.fecha === hoyStr  ? t('hoy')  :
    sesion.fecha === ayerStr ? t('ayer') :
    new Intl.DateTimeFormat(idioma === 'es' ? 'es-MX' : 'en-US', { day: 'numeric', month: 'short' })
      .format(new Date(`${sesion.fecha}T12:00:00`));

  const seccionLabel = sesion.seccion === 'matematicas' ? t('matematicas') : t('lecturaYEscritura');
  const tipoLabel    = sesion.tipo === 'examen' ? t('examen') : t('diaria');
  const icono        = sesion.tipo === 'examen' ? '🕐' : '📝';
  const pct          = sesion.total > 0 ? Math.round((sesion.correctas / sesion.total) * 100) : 0;

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
      <span className="text-base" aria-hidden="true">{icono}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate">
          {seccionLabel} · {tipoLabel}
        </p>
        <p className="text-xs text-gray-500">{fechaLabel} · {formatearSegundos(sesion.segundos)}</p>
      </div>
      <span className={`text-sm font-bold shrink-0 ${pct >= 80 ? 'text-green-600' : pct >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
        {sesion.correctas}/{sesion.total}
      </span>
    </div>
  );
}

// ── Main screen ───────────────────────────────────────────────────────────────

export function PantallaProgreso({ onVolver }) {
  const { t, idioma, alternarIdioma } = useLang();

  const sesiones   = obtenerSesiones();
  const racha      = calcularRacha(sesiones);
  const precision  = calcularPrecisionPorSeccion(sesiones);
  const historial7 = obtenerHistorial7Dias(sesiones);
  const recientes  = [...sesiones].reverse().slice(0, 8);

  const precRW   = precision.find(p => p.seccion === 'lectura-escritura');
  const precMath = precision.find(p => p.seccion === 'matematicas');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Header ──────────────────────────────────────────────────── */}
      <header className="bg-blue-700 text-white px-5 pt-10 pb-5">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onVolver}
            className="flex items-center gap-1.5 text-blue-200 hover:text-white text-sm font-medium transition-colors"
          >
            ← {t('volver')}
          </button>
          <button
            onClick={alternarIdioma}
            className="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full transition-colors"
          >
            {t('cambiarIdioma')}
          </button>
        </div>
        <h1 className="font-bold text-xl">{t('miProgreso')}</h1>

        {/* Streak pill in header */}
        <div className="mt-3 inline-flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2">
          <span className="text-xl" aria-hidden="true">🔥</span>
          <span className="font-bold text-lg">{racha}</span>
          <span className="text-blue-200 text-sm">{t('dias')} · {t('rachaActual')}</span>
        </div>
      </header>

      {/* ── Body ────────────────────────────────────────────────────── */}
      <main className="flex-1 px-5 py-6 max-w-lg mx-auto w-full flex flex-col gap-6">

        {sesiones.length === 0 ? (
          <p className="text-gray-600 text-sm text-center mt-16">{t('sinHistorial')}</p>
        ) : (
          <>
            {/* Accuracy by section */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">
                {t('precisionPorSeccion')}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <TarjetaSeccion datos={precRW}   labelKey="lecturaYEscritura" />
                <TarjetaSeccion datos={precMath} labelKey="matematicas"       />
              </div>
            </section>

            {/* 7-day chart */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">
                {t('ultimosSieteDias')}
              </h2>
              <div
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4"
                role="img"
                aria-label={t('ultimosSieteDias')}
              >
                <GraficoSieteDias historial={historial7} idioma={idioma} />
              </div>
            </section>

            {/* Recent sessions */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">
                {t('sesionesRecientes')}
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4">
                {recientes.map(s => <FilaSesion key={s.id} sesion={s} />)}
              </div>
            </section>
          </>
        )}

      </main>
    </div>
  );
}
