# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Is

**SAT en Español** is a bilingual (Spanish-first, English-toggle) SAT prep web app for Spanish-speaking high school students. It surfaces one new Reading & Writing question and one new Math question daily, drawn from the official College Board question bank, fully translated and explained in Spanish. Users can check answers, read bilingual explanations, and request a deeper AI-powered breakdown via the Anthropic API (`claude-sonnet-4-20250514`). Additional features: timed practice mode mirroring the real digital SAT's four-module structure, a filterable question bank, streak and accuracy tracking, and an embedded Desmos graphing calculator inside every Math question. The entire UI switches between Spanish and English via a single toggle; **Spanish is always the default and primary experience**.

## Tech Stack

- **React + Vite** — component model maps cleanly onto the question/screen architecture
- **Tailwind CSS** — all styling; no separate CSS layer
- **Desmos Graphing Calculator** — embedded via official iframe API on every Math question
- **Anthropic API** — client-side AI explanations
- **localStorage** — progress and streak persistence only (nothing else)
- **`questions.js`** — flat local file for question data; no database until the bank exceeds ~200 entries

## Architecture

### Bilingual String System
All user-facing copy lives in a single `copy.js` file. A `LanguageContext` + `useLang()` hook provides string lookup to every component. **No i18n library is used.** Every component must call `useLang()` for any rendered text — never hardcode Spanish or English strings in JSX.

### Key Files and Their Roles
| Path | Purpose |
|---|---|
| `src/copy.js` | Single source of truth for all bilingual strings |
| `src/context/LanguageContext.js` | Provides current language and toggle to the tree |
| `src/hooks/useLang.js` | Hook for consuming `LanguageContext` in components |
| `src/hooks/useExplanation.js` | **Only** place Anthropic API calls may live |
| `src/utils/getDailyQuestion.js` | Pure function, no side effects — all daily question selection logic |
| `src/data/questions.js` | Official College Board question data — treat as read-only |

### Data Flow Rules
- **Components never fetch data.** All async logic (including the Anthropic API) belongs in hooks.
- `getDailyQuestion.js` must remain a pure function with no side effects.
- The Anthropic API key is read **only** from environment variables — never stored in the codebase.

### Component Rules
- Components are small and single-purpose. If a component exceeds ~80 lines, split it.
- Use **named exports** for all components and utilities — no default exports.
- **Tailwind only** for styling. `style={{}}` is allowed only for dynamic values Tailwind cannot express (e.g. a computed pixel width).
- Use **Spanish variable names** for domain concepts (e.g. `preguntaDelDia`, `seccion`, `respuestaCorrecta`).

### localStorage Scope
Only progress tracking and streak data may be persisted to localStorage. Specifically excluded: question state, language preference.

## Commands

Once the Vite project is scaffolded:

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

## Hard Constraints

- **Do not add any npm dependency** without asking first and explaining why the existing stack cannot handle it.
- **Do not modify `questions.js`** content, correct answers, or explanations without explicit instruction — it contains official College Board material.
- **Do not switch the default language to English** for any reason; Spanish is always the initial render state.
- **Do not use localStorage** for anything beyond progress and streak data.
- **Do not write components that fetch data directly** — all async logic belongs in hooks.
- **Do not store the Anthropic API key** in the codebase; read it only from environment variables.
