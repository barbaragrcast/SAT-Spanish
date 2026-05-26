import { useState, useEffect, useRef } from 'react';
import { useLang } from '../hooks/useLang.js';

/**
 * ExamenActivo — countdown timer + question navigator for the timed exam.
 *
 * Flow: user selects an answer, clicks Siguiente to advance.
 * If the timer reaches zero, onFin is called automatically with
 * whatever answers have been recorded so far.
 */

function formatearTiempo(seg) {
  const m = Math.floor(seg / 60).toString().padStart(2, '0');
  const s = (seg % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export function ExamenActivo({ preguntas, tiempoSegundos, onFin }) {
  const { t, idioma } = useLang();

  const [indice,    setIndice]    = useState(0);
  const [seleccion, setSeleccion] = useState(null);   // current question pick
  const [respuestas, setRespuestas] = useState({});   // id → letra
  const [segundos,  setSegundos]  = useState(tiempoSegundos);

  // Refs so the setInterval callback always reads fresh values
  const respuestasRef = useRef({});
  const onFinRef      = useRef(onFin);
  const inicioRef     = useRef(Date.now());

  useEffect(() => { respuestasRef.current = respuestas; }, [respuestas]);
  useEffect(() => { onFinRef.current = onFin; },          [onFin]);

  // ── Countdown — single interval for the entire exam ──────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setSegundos(prev => {
        if (prev <= 1) {
          clearInterval(id);
          const elapsed = Math.round((Date.now() - inicioRef.current) / 1000);
          onFinRef.current(respuestasRef.current, elapsed);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []); // runs once on mount

  // ── Navigation ────────────────────────────────────────────────────────────
  const pregunta = preguntas[indice];
  const esUltima = indice === preguntas.length - 1;

  function handleSiguiente() {
    // Commit current selection (may be null if skipped)
    const nuevas = seleccion
      ? { ...respuestasRef.current, [pregunta.id]: seleccion }
      : respuestasRef.current;

    if (esUltima) {
      const elapsed = Math.round((Date.now() - inicioRef.current) / 1000);
      onFinRef.current(nuevas, elapsed);
    } else {
      setRespuestas(nuevas);
      setIndice(i => i + 1);
      setSeleccion(null);
    }
  }

  // ── Visual state ──────────────────────────────────────────────────────────
  const urgente    = segundos <= 60;
  const progresoW  = `${((tiempoSegundos - segundos) / tiempoSegundos) * 100}%`;

  return (
    <div className="flex flex-col flex-1">

      {/* Timer progress bar */}
      <div className="h-1 bg-gray-200">
        <div
          className={`h-1 transition-all duration-1000 ${urgente ? 'bg-red-500' : 'bg-blue-500'}`}
          style={{ width: progresoW }}
        />
      </div>

      {/* Timer + question counter */}
      <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-gray-100">
        <span className="text-xs font-medium text-gray-500">
          {t('preguntaNumero')} {indice + 1} / {preguntas.length}
        </span>
        <span
          className={`font-mono text-sm font-bold ${urgente ? 'text-red-600 animate-pulse' : 'text-gray-700'}`}
          aria-label={`${t('tiempoRestante')}: ${formatearTiempo(segundos)}`}
          aria-live={urgente ? 'assertive' : 'off'}
          aria-atomic="true"
        >
          {formatearTiempo(segundos)}
        </span>
      </div>

      {/* Question stem */}
      <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-2">
            {pregunta.habilidad}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {pregunta.enunciado[idioma]}
          </p>
        </div>

        {/* Answer choices */}
        <div className="flex flex-col gap-2.5">
          {pregunta.opciones.map(({ letra, texto }) => (
            <button
              key={letra}
              onClick={() => setSeleccion(letra)}
              className={`
                w-full flex items-start gap-3 border-2 rounded-xl px-4 py-3 text-left
                text-sm font-medium transition-colors cursor-pointer
                ${letra === seleccion
                  ? 'border-blue-500 bg-blue-50 text-blue-900 ring-1 ring-blue-500'
                  : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50'}
              `}
            >
              <span className="shrink-0 w-5 font-bold">{letra}.</span>
              <span>{texto[idioma]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Next / Finish button */}
      <div className="px-5 py-4 border-t border-gray-100 bg-white">
        <button
          onClick={handleSiguiente}
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          {esUltima ? t('finDelEnsayo') : t('siguientePregunta')}
        </button>
        {!seleccion && (
          <p className="text-xs text-gray-500 text-center mt-1.5">
            {t('seleccionaUnaRespuesta')}
          </p>
        )}
      </div>

    </div>
  );
}
