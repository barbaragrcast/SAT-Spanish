import { useLang } from '../hooks/useLang.js';
import { getDailyQuestion } from '../utils/getDailyQuestion.js';
import { preguntas } from '../data/questions.js';
import { TarjetaPregunta } from '../components/TarjetaPregunta.jsx';
import { guardarSesion, registrarDiaria, yaRespondioHoy, obtenerDiaria } from '../utils/progreso.js';

const DIFICULTAD_CLASES = {
  facil:   'bg-green-400/20 text-green-100',
  medio:   'bg-amber-400/20 text-amber-100',
  dificil: 'bg-red-400/20  text-red-100',
};

export function PantallaPregunta({ tipo, onVolver }) {
  const { t, alternarIdioma } = useLang();
  const pregunta = getDailyQuestion(preguntas, tipo);
  const labelKey = tipo === 'matematicas' ? 'matematicas' : 'lecturaYEscritura';

  // ── Daily lock — read on every render (component remounts on navigation) ──
  const yaHoy         = yaRespondioHoy(tipo);
  const registroHoy   = yaHoy ? obtenerDiaria()[tipo] : null;

  // Called by TarjetaPregunta on first submit
  function handleEnviado({ esCorrecta, seleccion, segundos }) {
    if (yaRespondioHoy(tipo)) return;   // guard against race (StrictMode double-invoke)
    registrarDiaria(tipo, seleccion, esCorrecta);
    guardarSesion({
      seccion:   tipo,
      tipo:      'diaria',
      correctas: esCorrecta ? 1 : 0,
      total:     1,
      segundos,
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Header ──────────────────────────────────────────────────── */}
      <header className="bg-blue-700 text-white px-5 pt-10 pb-5">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onVolver}
            className="flex items-center gap-1.5 text-blue-200 hover:text-white transition-colors text-sm font-medium"
          >
            <span aria-hidden="true">←</span>
            {t('volver')}
          </button>
          <button
            onClick={alternarIdioma}
            className="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full transition-colors"
          >
            {t('cambiarIdioma')}
          </button>
        </div>

        <p className="text-xs text-blue-300 uppercase tracking-wide">{t('preguntaDelDia')}</p>
        <div className="flex items-center gap-2.5 mt-0.5">
          <h1 className="font-bold text-xl">{t(labelKey)}</h1>
          {pregunta && (
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${DIFICULTAD_CLASES[pregunta.dificultad]}`}>
              {t(pregunta.dificultad)}
            </span>
          )}
        </div>
        {pregunta && (
          <p className="text-blue-200 text-xs mt-0.5">{pregunta.habilidad}</p>
        )}
      </header>

      {/* ── Content ─────────────────────────────────────────────────── */}
      <main className="flex-1 px-5 py-6 max-w-lg mx-auto w-full flex flex-col gap-4">

        {/* Already-answered banner */}
        {yaHoy && (
          <div
            role="status"
            className="flex items-center gap-2.5 bg-green-50 border border-green-200 rounded-2xl px-4 py-3"
          >
            <span className="text-lg" aria-hidden="true">✅</span>
            <p className="text-sm text-green-800 font-medium">{t('yaRespondiste')}</p>
          </div>
        )}

        {pregunta ? (
          <TarjetaPregunta
            pregunta={pregunta}
            onEnviado={handleEnviado}
            seleccionInicial={registroHoy?.seleccion ?? null}
            bloqueado={yaHoy}
          />
        ) : (
          <p className="text-gray-600 text-sm text-center mt-10">{t('sinPreguntas')}</p>
        )}

      </main>
    </div>
  );
}
