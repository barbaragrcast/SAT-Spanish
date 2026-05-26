# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Is

**SAT en Español** is a bilingual (Spanish-first, English-toggle) SAT prep web app for Spanish-speaking high school students. It surfaces one new Reading & Writing question and one new Math question daily, drawn from the official College Board question bank, fully translated and explained in Spanish. Users can check answers, read bilingual explanations, and request a deeper AI-powered breakdown via the Anthropic API (`claude-sonnet-4-20250514`). Additional features: timed practice mode mirroring the real digital SAT's four-module structure, a filterable question bank, streak and accuracy tracking, and an embedded Desmos graphing calculator inside every Math question. **Spanish is always the default and primary experience.**

## Tech Stack

- **React + Vite** — component model maps cleanly onto the question/screen architecture
- **Tailwind CSS** — all styling; no separate CSS layer
- **Desmos Graphing Calculator** — embedded via official iframe API on Math questions (implementation deferred; fields reserved in data shape)
- **Anthropic API** — client-side AI explanations (`claude-sonnet-4-20250514`), proxied server-side
- **localStorage** — progress and streak persistence only (nothing else)
- **`src/data/questions.js`** — flat local file for question data; no database until the bank exceeds ~200 entries

## Commands

```bash
npm install       # install dependencies
npm run dev       # start Vite dev server
npm run build     # production build
npm run preview   # preview production build locally
npm run lint      # lint
```

## Architecture

### Date-Seed Daily Question Logic

All selection logic lives in `src/utils/getDailyQuestion.js` — a pure function with no side effects.

**Algorithm:** convert today's date to a `YYYYMMDD` integer and take it modulo the question pool size:

```js
semilla = fecha.getFullYear() * 10000 + (fecha.getMonth() + 1) * 100 + fecha.getDate()
// e.g. May 25 2026 → 20260525
indice = semilla % filtradas.length
```

This guarantees every user sees the same question on the same calendar day and the pool rotates naturally as days advance. The function signature is `getDailyQuestion(preguntas, tipo, fecha = new Date())` — the injected `fecha` parameter makes it fully unit-testable without mocking `Date`.

### ES/EN Toggle Architecture

The entire bilingual system has three layers:

1. **`src/copy.js`** — flat object where every key maps to `{ es: string, en: string }`. This is the single source of truth for all user-facing text. New strings go here first.

2. **`src/context/LanguageContext.jsx`** — holds `idioma` state (type `'es' | 'en'`). Default is `'es'`, hardcoded as `useState('es')` — never derived from `localStorage`, `navigator.language`, or any external source. Exposes `{ idioma, alternarIdioma }` via context. `LanguageProvider` must wrap the app root in `main.jsx`.

3. **`src/hooks/useLang.js`** — every component that renders text calls this hook. Returns `{ t, idioma, alternarIdioma }` where `t(clave)` returns `copy[clave]?.[idioma] ?? clave`. The fallback to the key name makes missing translations immediately visible during development.

**Data flow:** `LanguageProvider` (root) → `useLang()` (component) → `t('key')` → rendered string. No component ever accesses `copy` directly or hardcodes language strings in JSX.

`alternarIdioma` flips `'es'` ↔ `'en'`. Language preference is **not** persisted to localStorage — it resets to Spanish on every page load by design.

### Desmos Embed Strategy *(architecture defined; component deferred)*

The `calculadora` and `expresionDesmos` fields are already reserved in the question data shape so no migration will be needed when the component is built.

**Planned approach:** A `DesmosCalculadora` component will render only when a question has `tipo === 'matematicas'` and `calculadora === true`. It will use the Desmos public iframe URL (`https://www.desmos.com/calculator`). If `expresionDesmos` is set on the question, that expression string will be URL-encoded into the iframe `src`. No Desmos JS SDK will be loaded — the iframe API is sufficient at this scale.

### Question Data Shape

Defined in `src/data/questions.js`. All field names use Spanish domain vocabulary:

| Field | Type | Notes |
|---|---|---|
| `id` | `string` | e.g. `"rw-001"`, `"mat-042"` |
| `tipo` | `'lectura-escritura' \| 'matematicas'` | drives Desmos render and filtering |
| `modulo` | `1 \| 2` | SAT module number |
| `dificultad` | `'facil' \| 'medio' \| 'dificil'` | |
| `dominio` | `string` | e.g. `"Álgebra"`, `"Lectura y comprensión"` |
| `habilidad` | `string` | specific skill tested |
| `enunciado` | `{ es, en }` | question stem |
| `opciones` | `[{ letra, texto: { es, en } }]` | A–D choices |
| `respuestaCorrecta` | `'A' \| 'B' \| 'C' \| 'D'` | |
| `explicacion` | `{ es, en }` | shown after answer check |
| `calculadora` | `boolean` | whether Desmos renders |
| `expresionDesmos` | `string \| null` | optional pre-loaded expression |

### Key Files

| Path | Purpose |
|---|---|
| `src/copy.js` | All bilingual strings — single source of truth |
| `src/context/LanguageContext.jsx` | Language state and toggle; wraps app root |
| `src/hooks/useLang.js` | `t()` lookup hook — used in every component |
| `src/hooks/useExplanation.js` | **Only** place Anthropic API calls may live |
| `src/utils/getDailyQuestion.js` | Pure date-seed question selector |
| `src/data/questions.js` | Official College Board question data — read-only |

### Async / Data Flow Rules

- **Components never fetch data.** All async logic (Anthropic API included) belongs in hooks.
- `getDailyQuestion.js` must stay a pure function — no side effects, no imports from outside the file.
- The Anthropic API key is server-side only; `useExplanation.js` POSTs to `/api/explicar` and never reads `import.meta.env` directly.

### Component Rules

- Components are small and single-purpose. Split at ~80 lines.
- **Named exports** for all components and utilities — no default exports.
- **Tailwind only** for styling. `style={{}}` is allowed only for dynamic values Tailwind cannot express (e.g. a computed pixel width).
- Spanish variable names for domain concepts: `preguntaDelDia`, `seccion`, `respuestaCorrecta`, etc.

### localStorage Scope

Only progress tracking and streak data. Explicitly excluded: question state, language preference.

## Hard Constraints

- **Do not add any npm dependency** without asking first and explaining why the existing stack cannot handle it.
- **Do not modify `questions.js`** content, correct answers, or explanations without explicit instruction — it contains official College Board material.
- **Do not switch the default language to English** for any reason; Spanish is always the initial render state.
- **Do not use localStorage** for anything beyond progress and streak data.
- **Do not write components that fetch data directly** — all async logic belongs in hooks.
- **Do not store the Anthropic API key** in the codebase; read it only from environment variables, server-side.
