import { useState, useMemo } from 'react';
import { useLang } from '../hooks/useLang.js';
import { preguntas } from '../data/questions.js';
import { TarjetaPregunta } from '../components/TarjetaPregunta.jsx';
import { guardarSesion } from '../utils/progreso.js';

// ── Shared ────────────────────────────────────────────────────────────────────

const DIFICULTAD_BADGE = {
  facil:   'bg-green-100 text-green-800',
  medio:   'bg-amber-100 text-amber-800',
  dificil: 'bg-red-100 text-red-800',
};

const DIFICULTAD_HEADER = {
  facil:   'bg-green-400/20 text-green-100',
  medio:   'bg-amber-400/20 text-amber-100',
  dificil: 'bg-red-400/20  text-red-100',
};

function Pill({ activo, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
        activo
          ? 'bg-blue-600 text-white'
          : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-700'
      }`}
    >
      {children}
    </button>
  );
}

// ── Question preview card ─────────────────────────────────────────────────────

function TarjetaPrevia({ pregunta, onPracticar }) {
  const { t, idioma } = useLang();
  const stem    = pregunta.enunciado[idioma];
  const preview = stem.length > 110 ? stem.slice(0, 110).trimEnd() + '…' : stem;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-2">
      {/* Domain + difficulty */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-600 truncate">
          {pregunta.dominio}
        </span>
        <span className={`shrink-0 text-xs font-medium px-2.5 py-0.5 rounded-full ${DIFICULTAD_BADGE[pregunta.dificultad]}`}>
          {t(pregunta.dificultad)}
        </span>
      </div>

      {/* Skill */}
      <p className="text-sm font-semibold text-gray-800 leading-snug">
        {pregunta.habilidad}
      </p>

      {/* Stem preview */}
      <p className="text-xs text-gray-500 leading-relaxed">{preview}</p>

      {/* CTA */}
      <button
        onClick={onPracticar}
        className="self-end text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-0.5"
      >
        {t('practicar')} →
      </button>
    </div>
  );
}

// ── Detail view (question card + back) ───────────────────────────────────────

function DetallePregunta({ pregunta, onVolver }) {
  const { t, alternarIdioma } = useLang();
  const labelKey = pregunta.tipo === 'matematicas' ? 'matematicas' : 'lecturaYEscritura';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
        <p className="text-xs text-blue-300 uppercase tracking-wide">{t(labelKey)}</p>
        <div className="flex items-center gap-2.5 mt-0.5">
          <h1 className="font-bold text-xl">{pregunta.habilidad}</h1>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${DIFICULTAD_HEADER[pregunta.dificultad]}`}>
            {t(pregunta.dificultad)}
          </span>
        </div>
        <p className="text-blue-200 text-xs mt-0.5">{pregunta.dominio}</p>
      </header>
      <main className="flex-1 px-5 py-6 max-w-lg mx-auto w-full">
        {/* key resets TarjetaPregunta state when switching questions */}
        <TarjetaPregunta
          key={pregunta.id}
          pregunta={pregunta}
          onEnviado={({ esCorrecta, segundos }) =>
            guardarSesion({
              seccion:   pregunta.tipo,
              tipo:      'diaria',
              correctas: esCorrecta ? 1 : 0,
              total:     1,
              segundos,
            })
          }
        />
      </main>
    </div>
  );
}

// ── Main screen ───────────────────────────────────────────────────────────────

export function PantallaBanco({ onVolver }) {
  const { t, alternarIdioma } = useLang();

  const [filtroSeccion,    setFiltroSeccion]    = useState('todas');
  const [filtroDificultad, setFiltroDificultad] = useState('todas');
  const [filtroDominio,    setFiltroDominio]    = useState('');
  const [preguntaActiva,   setPreguntaActiva]   = useState(null);

  // Unique domains for the selected section (so dropdown stays relevant)
  const dominios = useMemo(() => {
    const pool = filtroSeccion === 'todas'
      ? preguntas
      : preguntas.filter(p => p.tipo === filtroSeccion);
    return [...new Set(pool.map(p => p.dominio))].sort();
  }, [filtroSeccion]);

  // Apply all active filters
  const filtradas = useMemo(() => preguntas.filter(p => {
    if (filtroSeccion    !== 'todas' && p.tipo       !== filtroSeccion)    return false;
    if (filtroDificultad !== 'todas' && p.dificultad !== filtroDificultad) return false;
    if (filtroDominio                && p.dominio    !== filtroDominio)    return false;
    return true;
  }), [filtroSeccion, filtroDificultad, filtroDominio]);

  // Reset domain when section changes (it may no longer be valid)
  function handleSeccion(s) {
    setFiltroSeccion(s);
    setFiltroDominio('');
  }

  // ── Detail view ────────────────────────────────────────────────────────────
  if (preguntaActiva) {
    return (
      <DetallePregunta
        pregunta={preguntaActiva}
        onVolver={() => setPreguntaActiva(null)}
      />
    );
  }

  // ── List view ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
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
        <h1 className="font-bold text-xl">{t('bancoDePreguntas')}</h1>
        <p className="text-blue-200 text-sm mt-0.5">
          {filtradas.length} {t('preguntas')}
        </p>
      </header>

      {/* Sticky filter bar */}
      <div className="bg-white border-b border-gray-100 px-5 py-3 flex flex-col gap-2.5 sticky top-0 z-10 shadow-sm">

        {/* Section pills */}
        <div className="flex gap-2 overflow-x-auto pb-0.5">
          <Pill activo={filtroSeccion === 'todas'}             onClick={() => handleSeccion('todas')}            >{t('todas')}</Pill>
          <Pill activo={filtroSeccion === 'lectura-escritura'} onClick={() => handleSeccion('lectura-escritura')}>{t('lecturaYEscritura')}</Pill>
          <Pill activo={filtroSeccion === 'matematicas'}       onClick={() => handleSeccion('matematicas')}      >{t('matematicas')}</Pill>
        </div>

        {/* Domain select + difficulty pills */}
        <div className="flex gap-2 overflow-x-auto pb-0.5 items-center">
          <select
            value={filtroDominio}
            onChange={e => setFiltroDominio(e.target.value)}
            aria-label={t('todosTemas')}
            className="shrink-0 text-xs border border-gray-200 rounded-full px-3 py-1.5 bg-white text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer"
          >
            <option value="">{t('todosTemas')}</option>
            {dominios.map(d => <option key={d} value={d}>{d}</option>)}
          </select>

          <Pill activo={filtroDificultad === 'todas'}   onClick={() => setFiltroDificultad('todas')}  >{t('todas')}</Pill>
          <Pill activo={filtroDificultad === 'facil'}   onClick={() => setFiltroDificultad('facil')}  >{t('facil')}</Pill>
          <Pill activo={filtroDificultad === 'medio'}   onClick={() => setFiltroDificultad('medio')}  >{t('medio')}</Pill>
          <Pill activo={filtroDificultad === 'dificil'} onClick={() => setFiltroDificultad('dificil')}>{t('dificil')}</Pill>
        </div>

      </div>

      {/* Question list */}
      <main className="flex-1 px-5 py-5 max-w-lg mx-auto w-full flex flex-col gap-3">
        {filtradas.length === 0 ? (
          <p className="text-gray-600 text-sm text-center mt-10">{t('sinResultados')}</p>
        ) : (
          filtradas.map(p => (
            <TarjetaPrevia
              key={p.id}
              pregunta={p}
              onPracticar={() => setPreguntaActiva(p)}
            />
          ))
        )}
      </main>

    </div>
  );
}
