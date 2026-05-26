import { useLang } from '../hooks/useLang.js';

/**
 * ResumenEnsayo — post-exam score summary.
 * Shows percentage, correct/total, time used, and a per-question review list.
 */

function formatearTiempo(segundos) {
  const m = Math.floor(segundos / 60);
  const s = segundos % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

export function ResumenEnsayo({ resultados, onVolver, onReintentar }) {
  const { t } = useLang();
  const { correctas, total, tiempoUsado, preguntas, respuestas } = resultados;
  const pct = total > 0 ? Math.round((correctas / total) * 100) : 0;

  const colorPct =
    pct >= 80 ? 'text-green-500' :
    pct >= 50 ? 'text-amber-500' :
                'text-red-500';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Score header ────────────────────────────────────────────── */}
      <header className="bg-blue-700 text-white px-5 pt-12 pb-8 text-center">
        <p className="text-blue-300 text-xs uppercase tracking-widest mb-3">
          {t('finDelEnsayo')}
        </p>
        <div className={`text-7xl font-black ${colorPct}`}>{pct}%</div>
        <p className="text-blue-200 mt-2 text-sm">
          {correctas} / {total} {t('preguntasCorrectas')}
        </p>
      </header>

      {/* ── Stats + review ──────────────────────────────────────────── */}
      <main className="flex-1 px-5 py-6 max-w-lg mx-auto w-full flex flex-col gap-4">

        {/* Quick stats */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-0.5">
              {t('tiempoUsado')}
            </p>
            <p className="font-bold text-gray-800">{formatearTiempo(tiempoUsado)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-0.5">
              {t('precision')}
            </p>
            <p className="font-bold text-gray-800">{pct}%</p>
          </div>
        </div>

        {/* Per-question review */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">
            {t('historial')}
          </p>
          <div className="flex flex-col gap-2.5">
            {preguntas.map((p, i) => {
              const dada     = respuestas[p.id];
              const correcta = dada === p.respuestaCorrecta;
              const omitida  = !dada;

              return (
                <div key={p.id} className="flex items-center gap-3 text-sm">
                  {/* Status dot */}
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                      ${omitida  ? 'bg-gray-100 text-gray-500'  :
                        correcta ? 'bg-green-100 text-green-800' :
                                   'bg-red-100 text-red-700'}`}
                  >
                    {omitida ? '–' : correcta ? '✓' : '✗'}
                  </span>

                  {/* Skill */}
                  <span className="text-gray-600 truncate flex-1">{p.habilidad}</span>

                  {/* Correct answer (always shown) */}
                  <span className="shrink-0 text-xs font-semibold text-gray-600">
                    {omitida ? t('omitida') : `→ ${p.respuestaCorrecta}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <button
          onClick={onReintentar}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          {t('intentarDeNuevo')}
        </button>
        <button
          onClick={onVolver}
          className="w-full bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-3 rounded-xl transition-colors"
        >
          ← {t('volver')}
        </button>

      </main>
    </div>
  );
}
