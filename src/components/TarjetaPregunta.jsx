import { useState, useRef } from 'react';
import { useLang } from '../hooks/useLang.js';

/**
 * Returns Tailwind classes for an answer button depending on state.
 *
 * Before submit  → selected = blue highlight, others = plain white
 * After submit   → correct = green, wrong-selected = red, rest = faded
 */
function clasesBoton(letra, seleccion, enviado, correcta) {
  if (!enviado) {
    if (letra === seleccion) {
      return 'border-blue-500 bg-blue-50 text-blue-900 ring-1 ring-blue-500';
    }
    return 'border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50';
  }

  // Post-submit states (all disabled)
  if (letra === correcta) {
    return 'border-green-500 bg-green-50 text-green-900';
  }
  if (letra === seleccion) {
    return 'border-red-400 bg-red-50 text-red-900';
  }
  return 'border-gray-100 bg-white text-gray-400';
}

/**
 * TarjetaPregunta
 *
 * Props:
 *   pregunta         — question object (required)
 *   onEnviado        — called with { esCorrecta, seleccion, segundos } on submit (optional)
 *   seleccionInicial — restore a previous answer letter, e.g. 'B' (optional)
 *   bloqueado        — start in submitted/locked state, e.g. already answered today (optional)
 */
export function TarjetaPregunta({
  pregunta,
  onEnviado        = null,
  seleccionInicial = null,
  bloqueado        = false,
}) {
  const { t, idioma } = useLang();
  const [seleccion, setSeleccion] = useState(seleccionInicial);
  const [enviado, setEnviado]     = useState(bloqueado);
  const inicioRef = useRef(Date.now());

  const esCorrecta = seleccion === pregunta.respuestaCorrecta;

  function handleEnviar() {
    if (!seleccion || enviado) return;
    const segundos = Math.round((Date.now() - inicioRef.current) / 1000);
    setEnviado(true);
    onEnviado?.({ esCorrecta: seleccion === pregunta.respuestaCorrecta, seleccion, segundos });
  }

  return (
    <div className="flex flex-col gap-5">

      {/* ── Question stem ──────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <p className="text-sm text-gray-700 leading-relaxed">
          {pregunta.enunciado[idioma]}
        </p>
      </div>

      {/* ── Answer choices ─────────────────────────────────────────── */}
      <div className="flex flex-col gap-2.5" role="radiogroup" aria-label={t('seleccionaUnaRespuesta')}>
        {pregunta.opciones.map(({ letra, texto }) => (
          <button
            key={letra}
            disabled={enviado}
            onClick={() => setSeleccion(letra)}
            aria-checked={letra === seleccion}
            role="radio"
            className={`
              w-full flex items-start gap-3 border-2 rounded-xl px-4 py-3 text-left
              text-sm font-medium transition-colors
              ${clasesBoton(letra, seleccion, enviado, pregunta.respuestaCorrecta)}
              ${enviado ? 'cursor-default' : 'cursor-pointer'}
            `}
          >
            {/* Letter badge */}
            <span className="shrink-0 w-5 font-bold">{letra}.</span>
            <span>{texto[idioma]}</span>

            {/* Post-submit icons */}
            {enviado && letra === pregunta.respuestaCorrecta && (
              <span className="ml-auto shrink-0 text-green-600" aria-hidden="true">✓</span>
            )}
            {enviado && letra === seleccion && letra !== pregunta.respuestaCorrecta && (
              <span className="ml-auto shrink-0 text-red-500" aria-hidden="true">✗</span>
            )}
          </button>
        ))}
      </div>

      {/* ── Submit button ──────────────────────────────────────────── */}
      {!enviado && (
        <div className="flex flex-col gap-1.5">
          <button
            disabled={!seleccion}
            onClick={handleEnviar}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                       disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed
                       text-white font-semibold py-3 rounded-xl transition-colors"
          >
            {t('verificarRespuesta')}
          </button>
          {!seleccion && (
            <p className="text-xs text-gray-500 text-center">{t('seleccionaUnaRespuesta')}</p>
          )}
        </div>
      )}

      {/* ── Post-submit feedback panel ─────────────────────────────── */}
      {enviado && (
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={`rounded-2xl border-2 p-5 ${
            esCorrecta
              ? 'border-green-200 bg-green-50'
              : 'border-red-100 bg-red-50'
          }`}
        >
          {/* Result label */}
          <p className={`font-bold text-sm ${esCorrecta ? 'text-green-800' : 'text-red-700'}`}>
            {esCorrecta
              ? t('respuestaCorrecta')
              : `${t('respuestaIncorrecta')} ${pregunta.respuestaCorrecta}.`}
          </p>

          {/* Explanation */}
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mt-4 mb-1.5">
            {t('explicacion')}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {pregunta.explicacion[idioma]}
          </p>
        </div>
      )}

    </div>
  );
}
