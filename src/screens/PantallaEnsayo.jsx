import { useState } from 'react';
import { useLang } from '../hooks/useLang.js';
import { preguntas as todasPreguntas } from '../data/questions.js';
import { ExamenActivo } from '../components/ExamenActivo.jsx';
import { ResumenEnsayo } from '../components/ResumenEnsayo.jsx';
import { guardarSesion } from '../utils/progreso.js';

/**
 * 70 seconds per question — slightly under real SAT pace (~71 s/q).
 * Math Module 2 (5 questions) gives the shortest timer (~5m 50s),
 * making it the easiest module to use when testing the timer-expiry path.
 */
const SEGUNDOS_POR_PREGUNTA = 70;

const MODULOS_CONFIG = [
  { tipo: 'lectura-escritura', modulo: 1, labelKey: 'lecturaYEscritura' },
  { tipo: 'lectura-escritura', modulo: 2, labelKey: 'lecturaYEscritura' },
  { tipo: 'matematicas',       modulo: 1, labelKey: 'matematicas'       },
  { tipo: 'matematicas',       modulo: 2, labelKey: 'matematicas'       },
];

// ── Shared header ─────────────────────────────────────────────────────────────
function CabeceraEnsayo({ titulo, subtitulo, onVolver, sinVolver }) {
  const { t, alternarIdioma } = useLang();
  return (
    <header className="bg-blue-700 text-white px-5 pt-10 pb-5">
      <div className="flex items-center justify-between mb-4">
        {!sinVolver ? (
          <button
            onClick={onVolver}
            className="flex items-center gap-1.5 text-blue-200 hover:text-white text-sm font-medium transition-colors"
          >
            ← {t('volver')}
          </button>
        ) : <div />}
        <button
          onClick={alternarIdioma}
          className="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full transition-colors"
        >
          {t('cambiarIdioma')}
        </button>
      </div>
      {subtitulo && (
        <p className="text-xs text-blue-300 uppercase tracking-wide">{subtitulo}</p>
      )}
      <h1 className="font-bold text-xl mt-0.5">{titulo}</h1>
    </header>
  );
}

// ── Module selector grid ──────────────────────────────────────────────────────
function SeleccionModulo({ onIniciar, onVolver }) {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <CabeceraEnsayo
        titulo={t('examenCronometrado')}
        subtitulo={t('seleccionaModulo')}
        onVolver={onVolver}
      />
      <main className="flex-1 px-5 py-6 max-w-lg mx-auto w-full">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {MODULOS_CONFIG.map((cfg) => {
            const qs      = todasPreguntas.filter(p => p.tipo === cfg.tipo && p.modulo === cfg.modulo);
            const minutos = Math.ceil((qs.length * SEGUNDOS_POR_PREGUNTA) / 60);
            const vacia   = qs.length === 0;

            return (
              <button
                key={`${cfg.tipo}-${cfg.modulo}`}
                disabled={vacia}
                onClick={() => onIniciar(cfg, qs)}
                className="bg-white border-2 border-gray-100 hover:border-blue-400 hover:bg-blue-50
                           disabled:opacity-40 disabled:cursor-not-allowed
                           rounded-2xl p-5 text-left shadow-sm transition-colors"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1">
                  {t(cfg.labelKey)}
                </p>
                <p className="font-bold text-gray-800 text-lg">{t('modulo')} {cfg.modulo}</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <span>{qs.length} {t('preguntas')}</span>
                  <span>·</span>
                  <span>{minutos} {t('minutos')}</span>
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}

// ── Main screen controller ────────────────────────────────────────────────────
export function PantallaEnsayo({ onVolver }) {
  const { t } = useLang();

  const [fase, setFase]             = useState('seleccion');
  const [moduloActivo, setModulo]   = useState(null);
  const [resultados, setResultados] = useState(null);

  // ── Start a module ────────────────────────────────────────────────────────
  function handleIniciar(cfg, qs) {
    setModulo({ ...cfg, preguntas: qs, tiempoSegundos: qs.length * SEGUNDOS_POR_PREGUNTA });
    setFase('examen');
  }

  // ── Exam finished (timer or last question) ────────────────────────────────
  function handleFinExamen(respuestas, tiempoUsado) {
    const correctas = moduloActivo.preguntas.filter(
      p => respuestas[p.id] === p.respuestaCorrecta
    ).length;

    guardarSesion({
      seccion:  moduloActivo.tipo,
      tipo:     'examen',
      correctas,
      total:    moduloActivo.preguntas.length,
      segundos: tiempoUsado,
    });

    setResultados({
      correctas,
      total:       moduloActivo.preguntas.length,
      tiempoUsado,
      preguntas:   moduloActivo.preguntas,
      respuestas,
    });
    setFase('resultados');
  }

  // ── Phase: module selection ───────────────────────────────────────────────
  if (fase === 'seleccion') {
    return <SeleccionModulo onIniciar={handleIniciar} onVolver={onVolver} />;
  }

  // ── Phase: active exam ────────────────────────────────────────────────────
  if (fase === 'examen') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <CabeceraEnsayo
          titulo={`${t('modulo')} ${moduloActivo.modulo}`}
          subtitulo={t(moduloActivo.labelKey)}
          sinVolver
        />
        <div className="flex-1 flex flex-col max-w-lg mx-auto w-full">
          <ExamenActivo
            key={`${moduloActivo.tipo}-${moduloActivo.modulo}`}
            preguntas={moduloActivo.preguntas}
            tiempoSegundos={moduloActivo.tiempoSegundos}
            onFin={handleFinExamen}
          />
        </div>
      </div>
    );
  }

  // ── Phase: results ────────────────────────────────────────────────────────
  if (fase === 'resultados') {
    return (
      <ResumenEnsayo
        resultados={resultados}
        onVolver={onVolver}
        onReintentar={() => {
          setModulo(null);
          setResultados(null);
          setFase('seleccion');
        }}
      />
    );
  }
}
