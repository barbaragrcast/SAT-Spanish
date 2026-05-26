/**
 * copy.js — Single source of truth for all bilingual UI strings.
 *
 * Rules:
 *  - Keys are camelCase English slugs.
 *  - Values are always { es: string, en: string }.
 *  - Never hardcode Spanish or English text in JSX — always use t('key').
 *  - Add new keys here before using them in a component.
 */

export const copy = {
  // ── App ─────────────────────────────────────────────────────────────────────
  tituloApp: {
    es: 'SAT en Español',
    en: 'SAT in Spanish',
  },
  subtituloApp: {
    es: 'Preparación para el SAT en tu idioma',
    en: 'SAT prep in your language',
  },

  // ── Navigation ───────────────────────────────────────────────────────────────
  preguntaDelDia: {
    es: 'Pregunta del Día',
    en: 'Question of the Day',
  },
  practica: {
    es: 'Práctica',
    en: 'Practice',
  },
  bancoDePreguntas: {
    es: 'Banco de Preguntas',
    en: 'Question Bank',
  },
  miProgreso: {
    es: 'Mi Progreso',
    en: 'My Progress',
  },

  // ── Language toggle ──────────────────────────────────────────────────────────
  cambiarIdioma: {
    es: 'Switch to English',
    en: 'Cambiar a Español',
  },

  // ── Subject labels ───────────────────────────────────────────────────────────
  lecturaYEscritura: {
    es: 'Lectura y Escritura',
    en: 'Reading & Writing',
  },
  matematicas: {
    es: 'Matemáticas',
    en: 'Math',
  },
  modulo: {
    es: 'Módulo',
    en: 'Module',
  },

  // ── Question UI ──────────────────────────────────────────────────────────────
  verificarRespuesta: {
    es: 'Verificar respuesta',
    en: 'Check answer',
  },
  explicameMas: {
    es: 'Explícame más',
    en: 'Explain more',
  },
  respuestaCorrecta: {
    es: '¡Correcto!',
    en: 'Correct!',
  },
  respuestaIncorrecta: {
    es: 'Incorrecto. La respuesta correcta es',
    en: 'Incorrect. The correct answer is',
  },
  explicacion: {
    es: 'Explicación',
    en: 'Explanation',
  },
  siguientePregunta: {
    es: 'Siguiente pregunta',
    en: 'Next question',
  },
  seleccionaUnaRespuesta: {
    es: 'Selecciona una respuesta para continuar.',
    en: 'Select an answer to continue.',
  },
  preguntaNumero: {
    es: 'Pregunta',
    en: 'Question',
  },

  // ── Difficulty labels ────────────────────────────────────────────────────────
  facil: {
    es: 'Fácil',
    en: 'Easy',
  },
  medio: {
    es: 'Medio',
    en: 'Medium',
  },
  dificil: {
    es: 'Difícil',
    en: 'Hard',
  },

  // ── Practice mode ────────────────────────────────────────────────────────────
  modoEnsayo: {
    es: 'Modo Ensayo',
    en: 'Practice Mode',
  },
  iniciarEnsayo: {
    es: 'Iniciar ensayo',
    en: 'Start practice',
  },
  tiempoRestante: {
    es: 'Tiempo restante',
    en: 'Time remaining',
  },
  minutos: {
    es: 'min',
    en: 'min',
  },
  segundos: {
    es: 'seg',
    en: 'sec',
  },
  finDeModulo: {
    es: 'Fin del módulo',
    en: 'End of module',
  },
  puntuacion: {
    es: 'Puntuación',
    en: 'Score',
  },
  continuarAlSiguienteModulo: {
    es: 'Continuar al siguiente módulo',
    en: 'Continue to next module',
  },
  finDelEnsayo: {
    es: 'Fin del ensayo',
    en: 'End of practice test',
  },

  // ── Question bank filters ────────────────────────────────────────────────────
  filtrar: {
    es: 'Filtrar',
    en: 'Filter',
  },
  todas: {
    es: 'Todas',
    en: 'All',
  },
  buscar: {
    es: 'Buscar preguntas…',
    en: 'Search questions…',
  },

  // ── Streak / progress ────────────────────────────────────────────────────────
  racha: {
    es: 'Racha',
    en: 'Streak',
  },
  dias: {
    es: 'días',
    en: 'days',
  },
  precision: {
    es: 'Precisión',
    en: 'Accuracy',
  },
  preguntasRespondidas: {
    es: 'Preguntas respondidas',
    en: 'Questions answered',
  },
  preguntasCorrectas: {
    es: 'Respuestas correctas',
    en: 'Correct answers',
  },
  historial: {
    es: 'Historial',
    en: 'History',
  },
  sinHistorial: {
    es: 'Todavía no has respondido ninguna pregunta.',
    en: "You haven't answered any questions yet.",
  },

  // ── AI explanation ───────────────────────────────────────────────────────────
  generandoExplicacion: {
    es: 'Generando explicación…',
    en: 'Generating explanation…',
  },
  errorExplicacion: {
    es: 'No se pudo generar la explicación. Intenta de nuevo.',
    en: 'Could not generate explanation. Please try again.',
  },

  // ── Error / loading states ───────────────────────────────────────────────────
  cargando: {
    es: 'Cargando…',
    en: 'Loading…',
  },
  errorGenerico: {
    es: 'Algo salió mal. Por favor intenta de nuevo.',
    en: 'Something went wrong. Please try again.',
  },
  sinPreguntas: {
    es: 'No hay preguntas disponibles por ahora.',
    en: 'No questions available right now.',
  },
  intentarDeNuevo: {
    es: 'Intentar de nuevo',
    en: 'Try again',
  },

  // ── Daily question lock ───────────────────────────────────────────────────────
  yaRespondiste: {
    es: 'Ya respondiste la pregunta de hoy. ¡Vuelve mañana!',
    en: "You've already answered today's question. Come back tomorrow!",
  },

  // ── Progress screen ──────────────────────────────────────────────────────────
  rachaActual: {
    es: 'Racha actual',
    en: 'Current streak',
  },
  precisionPorSeccion: {
    es: 'Precisión por sección',
    en: 'Accuracy by section',
  },
  ultimosSieteDias: {
    es: 'Últimos 7 días',
    en: 'Last 7 days',
  },
  sesionesRecientes: {
    es: 'Sesiones recientes',
    en: 'Recent sessions',
  },
  hoy: {
    es: 'Hoy',
    en: 'Today',
  },
  ayer: {
    es: 'Ayer',
    en: 'Yesterday',
  },
  diaria: {
    es: 'Diaria',
    en: 'Daily',
  },
  examen: {
    es: 'Examen',
    en: 'Exam',
  },

  // ── Question bank ────────────────────────────────────────────────────────────
  practicar: {
    es: 'Practicar',
    en: 'Practice',
  },
  todosTemas: {
    es: 'Todos los temas',
    en: 'All topics',
  },
  sinResultados: {
    es: 'No hay preguntas con esos filtros.',
    en: 'No questions match those filters.',
  },

  // ── Timed exam ───────────────────────────────────────────────────────────────
  seleccionaModulo: {
    es: 'Selecciona un módulo para comenzar',
    en: 'Select a module to begin',
  },
  preguntas: {
    es: 'preguntas',
    en: 'questions',
  },
  tiempoAgotado: {
    es: '¡Tiempo agotado!',
    en: "Time's up!",
  },
  tiempoUsado: {
    es: 'Tiempo usado',
    en: 'Time used',
  },
  omitida: {
    es: 'Omitida',
    en: 'Skipped',
  },

  // ── Home screen ─────────────────────────────────────────────────────────────
  examenCronometrado: {
    es: 'Examen Cronometrado',
    en: 'Timed Exam',
  },
  verPregunta: {
    es: 'Ver pregunta',
    en: 'See question',
  },
  volver: {
    es: 'Volver',
    en: 'Back',
  },
  proximamente: {
    es: 'Próximamente',
    en: 'Coming soon',
  },

  // ── Accessibility / Desmos ───────────────────────────────────────────────────
  abrirCalculadora: {
    es: 'Abrir calculadora',
    en: 'Open calculator',
  },
  calculadoraGrafica: {
    es: 'Calculadora gráfica',
    en: 'Graphing calculator',
  },
};
