import { useLang } from '../hooks/useLang.js';

/**
 * PantallaTest — bilingual toggle verification screen.
 *
 * Renders five UI strings side-by-side with their copy.js key so it's
 * immediately obvious whether every string switches on toggle.
 * Remove or replace this screen once the real daily-question screen exists.
 */

const CADENAS_DE_PRUEBA = [
  'preguntaDelDia',
  'verificarRespuesta',
  'racha',
  'errorGenerico',
  'practica',
];

export function PantallaTest() {
  const { t, idioma, alternarIdioma } = useLang();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-10 p-8">

      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold text-slate-800">{t('tituloApp')}</h1>
        <p className="text-sm text-slate-400 uppercase tracking-widest">
          Prueba del sistema bilingüe · Bilingual system test
        </p>
      </div>

      {/* Toggle button */}
      <button
        onClick={alternarIdioma}
        className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 active:scale-95 transition-all shadow-md"
      >
        <span>{t('cambiarIdioma')}</span>
        <span className="bg-blue-500 rounded-full px-2 py-0.5 text-xs font-mono tracking-widest">
          {idioma.toUpperCase()}
        </span>
      </button>

      {/* Five live strings */}
      <div className="w-full max-w-lg space-y-3">
        {CADENAS_DE_PRUEBA.map((clave) => (
          <div
            key={clave}
            className="flex items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm"
          >
            <code className="text-xs text-slate-400 shrink-0">{clave}</code>
            <span className="text-slate-800 font-medium text-right">{t(clave)}</span>
          </div>
        ))}
      </div>

      {/* Status */}
      <p className="text-xs text-slate-400">
        5 cadenas verificadas · idioma activo:{' '}
        <strong>{idioma === 'es' ? 'Español' : 'English'}</strong>
      </p>

    </div>
  );
}
