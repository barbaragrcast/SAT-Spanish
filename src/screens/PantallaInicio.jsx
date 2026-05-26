import { useLang } from '../hooks/useLang.js';
import { getDailyQuestion } from '../utils/getDailyQuestion.js';
import { preguntas } from '../data/questions.js';

const DIFICULTAD_CLASES = {
  facil:   'bg-green-100 text-green-800',
  medio:   'bg-amber-100 text-amber-800',
  dificil: 'bg-red-100  text-red-800',
};

function TarjetaPreguntaDiaria({ pregunta, labelKey, onVerPregunta }) {
  const { t } = useLang();
  if (!pregunta) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3">
      {/* Section label + difficulty badge */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {t(labelKey)}
        </span>
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${DIFICULTAD_CLASES[pregunta.dificultad]}`}
        >
          {t(pregunta.dificultad)}
        </span>
      </div>

      {/* Skill name */}
      <p className="text-sm text-gray-800 font-medium leading-snug">
        {pregunta.habilidad}
      </p>

      {/* CTA */}
      <button
        onClick={onVerPregunta}
        className="mt-auto w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
      >
        {t('verPregunta')}
      </button>
    </div>
  );
}

export function PantallaInicio({ onNavegar }) {
  const { t, alternarIdioma } = useLang();

  // Streak is stored in localStorage by future progress logic; default 0
  const racha = parseInt(localStorage.getItem('racha') ?? '0', 10);

  const preguntaRW   = getDailyQuestion(preguntas, 'lectura-escritura');
  const preguntaMath = getDailyQuestion(preguntas, 'matematicas');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="bg-blue-700 text-white px-5 pt-12 pb-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold leading-tight">{t('tituloApp')}</h1>
            <p className="text-blue-200 text-sm mt-0.5">{t('subtituloApp')}</p>
          </div>
          <button
            onClick={alternarIdioma}
            className="shrink-0 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full transition-colors mt-1"
          >
            {t('cambiarIdioma')}
          </button>
        </div>

        {/* Streak bar */}
        <div
          role="status"
          aria-label={`${racha} ${t('dias')} de ${t('racha').toLowerCase()}`}
          className="mt-5 flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3"
        >
          <span className="text-2xl" aria-hidden="true">🔥</span>
          <div>
            <span className="font-bold text-lg">{racha}</span>
            <span className="text-blue-100 text-sm ml-1.5">
              {t('dias')} · {t('racha')}
            </span>
          </div>
        </div>
      </header>

      {/* ── Body ───────────────────────────────────────────────────────── */}
      <main className="flex-1 px-5 py-6 flex flex-col gap-6 max-w-lg mx-auto w-full">

        {/* Daily question section */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">
            {t('preguntaDelDia')}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TarjetaPreguntaDiaria
              pregunta={preguntaRW}
              labelKey="lecturaYEscritura"
              onVerPregunta={() => onNavegar('pregunta-rw')}
            />
            <TarjetaPreguntaDiaria
              pregunta={preguntaMath}
              labelKey="matematicas"
              onVerPregunta={() => onNavegar('pregunta-mat')}
            />
          </div>
        </section>

        {/* Navigation buttons */}
        <section className="flex flex-col gap-3">
          <button
            onClick={() => onNavegar('ensayo')}
            className="w-full bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-800 font-semibold py-4 rounded-2xl flex items-center gap-3 px-5 transition-colors shadow-sm"
          >
            <span className="text-xl" aria-hidden="true">🕐</span>
            <span>{t('examenCronometrado')}</span>
          </button>
          <button
            onClick={() => onNavegar('banco')}
            className="w-full bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-800 font-semibold py-4 rounded-2xl flex items-center gap-3 px-5 transition-colors shadow-sm"
          >
            <span className="text-xl" aria-hidden="true">📚</span>
            <span>{t('bancoDePreguntas')}</span>
          </button>
          <button
            onClick={() => onNavegar('progreso')}
            className="w-full bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-800 font-semibold py-4 rounded-2xl flex items-center gap-3 px-5 transition-colors shadow-sm"
          >
            <span className="text-xl" aria-hidden="true">📊</span>
            <span>{t('miProgreso')}</span>
          </button>
        </section>

      </main>
    </div>
  );
}
