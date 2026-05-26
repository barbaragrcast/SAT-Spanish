# SAT en Español 🇪🇸

A bilingual (Spanish-first) SAT prep web app for Spanish-speaking high school students. Every day it surfaces one new Reading & Writing question and one new Math question, fully translated and explained in Spanish. Users can check answers, read bilingual explanations, practice timed exam modules, and browse a filterable question bank.

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:5173
```

Other commands:
```bash
npm run build      # production bundle
npm run preview    # preview production build
```

**Stack:** React 18 · Vite 6 · Tailwind CSS 3 — no router, no state library, no extra deps.

---

## App Screens

| Screen | How to reach |
|---|---|
| **Home** | Launch → `localhost:5173` |
| **Daily Question** | Tap "Ver pregunta" on either card |
| **Timed Exam** | Home → 🕐 Examen Cronometrado |
| **Question Bank** | Home → 📚 Banco de Preguntas |
| **Progress** | Home → 📊 Mi Progreso |

---

## How the Bilingual Toggle Works

Every user-facing string lives in exactly one place: **`src/copy.js`**.  
Every component reads strings through the **`useLang()`** hook.  
Language state lives in **`LanguageContext`** — it defaults to `'es'` on every page load and is never persisted to `localStorage` by design.

```
copy.js ← single source of truth for all UI text
    ↓
LanguageContext  (state: 'es' | 'en', default 'es')
    ↓
useLang()  →  t('key')  →  copy[key][idioma]
    ↓
Component renders the right language
```

Question text (stems, choices, explanations) is stored directly on each question object as `{ es: "...", en: "..." }` pairs and rendered with `pregunta.enunciado[idioma]`.

**Rule:** never hardcode a Spanish or English string in JSX. If a string is missing from `copy.js`, `t()` returns the key itself — this makes missing translations immediately visible during development.

---

## Adding New Questions

This is the main way to contribute. All questions live in one flat array in **`src/data/questions.js`**. No database, no API — just a JS object you can edit in any text editor.

### Field Reference

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | `string` | ✅ | 8-char hex, unique. See Step 1. |
| `tipo` | `'lectura-escritura'` \| `'matematicas'` | ✅ | Determines which daily card it appears in. |
| `modulo` | `1` \| `2` | ✅ | SAT module number. Use 1 or 2. |
| `dificultad` | `'facil'` \| `'medio'` \| `'dificil'` | ✅ | Controls the difficulty badge color. |
| `dominio` | `string` | ✅ | Topic area. Match existing domains exactly (see below). |
| `habilidad` | `string` | ✅ | The specific skill tested (shown on the card). |
| `enunciado` | `{ es, en }` | ✅ | Full question stem in both languages. |
| `opciones` | `[{ letra, texto: { es, en } }]` | ✅ | Exactly 4 choices: A, B, C, D. |
| `respuestaCorrecta` | `'A'` \| `'B'` \| `'C'` \| `'D'` | ✅ | The letter of the correct choice. |
| `explicacion` | `{ es, en }` | ✅ | Shown after the user submits. Explain why the answer is correct *and* why the distractors are wrong. |
| `calculadora` | `boolean` | ✅ | `true` if a graphing calculator should be available (Math only). |
| `expresionDesmos` | `string` \| `null` | ✅ | Pre-loaded Desmos expression (deferred feature — set `null` for now). |

**Existing domains** (match exactly — casing matters, used as filter values):

| Section | Domains |
|---|---|
| `lectura-escritura` | `'Información e Ideas'` |
| `matematicas` | `'Álgebra'` · `'Matemática Avanzada'` |

If you need a new domain (e.g. `'Artesanía y Estructura'`), add it here and it will automatically appear in the Question Bank filter dropdown.

---

### Step-by-Step: Adding One Question

#### Step 1 — Generate a unique ID

Open your browser console (F12 → Console) and run:

```js
Date.now().toString(16).slice(-8)
```

This gives you an 8-character hex string like `"1a2b3c4d"`. Copy it — that's your question's `id`.

Alternatively, any unique 8-char hex string works. Just make sure it doesn't already appear in `questions.js`.

#### Step 2 — Choose the section and module

- Reading passages, grammar, rhetoric → `tipo: 'lectura-escritura'`
- Algebra, advanced math, word problems → `tipo: 'matematicas'`
- SAT Module 1 questions tend to be easier; Module 2 questions harder. Check the original source.

#### Step 3 — Open `src/data/questions.js`

Find the comment block for your section:

```js
// ─────────────────────────────────────────────────────────────────────────
// LECTURA Y ESCRITURA  (15 questions)
// ─────────────────────────────────────────────────────────────────────────
```

Add your new question object inside the `preguntas` array under the right section. Order doesn't affect anything — the daily rotation uses a hash, not the array index.

#### Step 4 — Write the question object

Copy this template and fill it in:

```js
{
  id: 'YOUR_8_CHAR_HEX',          // from Step 1
  tipo: 'lectura-escritura',       // or 'matematicas'
  modulo: 1,                       // 1 or 2
  dificultad: 'medio',             // 'facil' | 'medio' | 'dificil'
  dominio: 'Información e Ideas',  // must match an existing domain exactly
  habilidad: 'Ideas Centrales y Detalles',

  enunciado: {
    es: `Texto completo del enunciado en español.
         Puede ocupar varias líneas dentro de la template literal.`,
    en: `Full question stem in English.
         Backticks handle any apostrophes or quotes safely.`,
  },

  opciones: [
    { letra: 'A', texto: { es: 'Opción A en español.', en: 'Choice A in English.' } },
    { letra: 'B', texto: { es: 'Opción B en español.', en: 'Choice B in English.' } },
    { letra: 'C', texto: { es: 'Opción C en español.', en: 'Choice C in English.' } },
    { letra: 'D', texto: { es: 'Opción D en español.', en: 'Choice D in English.' } },
  ],

  respuestaCorrecta: 'B',

  explicacion: {
    es: `La opción B es correcta porque... La opción A es incorrecta porque...`,
    en: `Choice B is correct because... Choice A is incorrect because...`,
  },

  calculadora: false,
  expresionDesmos: null,
},
```

#### Step 5 — Apostrophe rule (important!)

**Always use backtick template literals** (`` ` `` ) for any field that might contain apostrophes, possessives, or quotes. Single quotes inside a `'...'` string will break the file.

✅ Safe:
```js
en: `Coll and colleagues' 2010 census reported...`,
```

❌ Will crash:
```js
en: 'Coll and colleagues' 2010 census reported...',
```

When in doubt, use backticks for all string values — they're always safe.

#### Step 6 — Verify

1. The dev server will hot-reload automatically.
2. Open **Banco de Preguntas** → filter by your section and difficulty → your question should appear.
3. Tap **Practicar →** → verify the Spanish text displays correctly.
4. Toggle to English (top-right button) → verify the English text appears.
5. Select a wrong answer → Submit → confirm the correct answer highlights green and the explanation shows in both languages.
6. Check the console — no errors means the question is valid.

---

### Complete Worked Example

Here is a real question added using exactly the steps above. You can use this as a reference:

```js
{
  id: 'c9d4e2f1',
  tipo: 'lectura-escritura',
  modulo: 1,
  dificultad: 'facil',
  dominio: 'Información e Ideas',
  habilidad: 'Ideas Centrales y Detalles',

  enunciado: {
    es: `La arquitecta Zaha Hadid es conocida por diseños que desafían las convenciones geométricas tradicionales. Su edificio Heydar Aliyev Center en Bakú, Azerbaiyán, carece de ángulos rectos y presenta superficies onduladas continuas que eliminan la distinción entre suelo, pared y techo. Los críticos de arquitectura señalan que esta fluidez formal refleja la filosofía central de Hadid: que los espacios construidos deben fluir de manera orgánica, como el movimiento. ¿Cuál de las siguientes opciones expresa mejor la idea principal del texto?`,
    en: `Architect Zaha Hadid is known for designs that challenge traditional geometric conventions. Her Heydar Aliyev Center in Baku, Azerbaijan, has no right angles and features continuous undulating surfaces that eliminate the distinction between floor, wall, and ceiling. Architecture critics note that this formal fluidity reflects Hadid's central philosophy: that built spaces should flow organically, like movement itself. Which choice best states the main idea of the text?`,
  },

  opciones: [
    {
      letra: 'A',
      texto: {
        es: `El Heydar Aliyev Center es el edificio más importante de Hadid porque fue construido en Azerbaiyán.`,
        en: `The Heydar Aliyev Center is Hadid's most significant building because it was constructed in Azerbaijan.`,
      },
    },
    {
      letra: 'B',
      texto: {
        es: `El enfoque de diseño de Hadid, ilustrado por su trabajo en Bakú, refleja una filosofía de espacios fluidos y orgánicos que rompe con la geometría convencional.`,
        en: `Hadid's design approach, illustrated by her work in Baku, reflects a philosophy of fluid, organic space that breaks with conventional geometry.`,
      },
    },
    {
      letra: 'C',
      texto: {
        es: `Los ángulos rectos se evitan en la arquitectura moderna porque los críticos los consideran estéticamente anticuados.`,
        en: `Right angles are avoided in modern architecture because critics consider them aesthetically outdated.`,
      },
    },
    {
      letra: 'D',
      texto: {
        es: `Hadid diseñó el Heydar Aliyev Center para desafiar a los críticos de arquitectura que favorecen las formas geométricas tradicionales.`,
        en: `Hadid designed the Heydar Aliyev Center to challenge architecture critics who favor traditional geometric forms.`,
      },
    },
  ],

  respuestaCorrecta: 'B',

  explicacion: {
    es: `La opción B es correcta porque el texto describe tanto el estilo de Hadid (sin ángulos rectos, superficies onduladas) como la filosofía subyacente (espacios que fluyen orgánicamente), convirtiendo al Heydar Aliyev Center en el ejemplo concreto de esa idea central. La opción A es incorrecta porque la ubicación no determina la importancia. La opción C generaliza más allá de lo que dice el texto. La opción D invierte la relación: el diseño refleja la filosofía de Hadid, no una intención de desafiar a los críticos.`,
    en: `Choice B is correct because the text describes both Hadid's style (no right angles, undulating surfaces) and the underlying philosophy (spaces that flow organically), making the Heydar Aliyev Center the concrete example of that central idea. Choice A is wrong because location does not determine significance. Choice C overgeneralizes beyond what the text says. Choice D inverts the relationship: the design reflects Hadid's philosophy, not an intent to challenge critics.`,
  },

  calculadora: false,
  expresionDesmos: null,
},
```

---

### Common Mistakes

| Mistake | Symptom | Fix |
|---|---|---|
| Apostrophe in single-quoted string | App crashes, white screen | Use backtick `` ` `` for that field |
| Duplicate `id` | Second question silently shadows the first in the Question Bank | Generate a new ID with `Date.now().toString(16).slice(-8)` |
| Typo in `tipo` or `dificultad` | Question doesn't appear in filters | Values are case-sensitive; copy from the field reference table |
| `dominio` doesn't match an existing value | A new domain appears in filters (OK) OR question is orphaned from existing filters | Decide if the new domain is intentional |
| Only 3 choices instead of 4 | App renders correctly but the question is invalid for SAT prep | Always include A, B, C, and D |
| Missing `calculadora` or `expresionDesmos` | JavaScript error | Both fields are required; use `false` and `null` when not applicable |

---

## Project Structure (what matters)

```
src/
├── data/
│   └── questions.js          ← ⭐ Add questions here
├── utils/
│   ├── getDailyQuestion.js   ← Date-seed rotation algorithm
│   └── progreso.js           ← localStorage persistence
├── copy.js                   ← All bilingual UI strings
├── context/
│   └── LanguageContext.jsx   ← Language state (es/en)
├── hooks/
│   ├── useLang.js            ← t() lookup hook
│   └── useExplanation.js     ← Anthropic API calls (server-side proxy)
├── screens/                  ← One file per app screen
└── components/               ← Shared UI pieces
```

---

## localStorage Schema

| Key | Value | Written by |
|---|---|---|
| `sat_sesiones` | JSON array of session objects | `guardarSesion()` in `progreso.js` |
| `racha` | Number (cached streak) | `guardarSesion()` |
| `sat_diaria` | `{ 'lectura-escritura': { fecha, seleccion, correcta }, 'matematicas': { ... } }` | `registrarDiaria()` in `progreso.js` |

Nothing else is persisted. Language preference resets to Spanish on every load by design.

---

## Hard Constraints

- **Do not modify existing question content, correct answers, or explanations** without explicit permission — they come from official College Board material.
- **Do not add npm dependencies** without first checking whether React + Tailwind can handle the need.
- **Spanish is always the default language.** Never change the `useState('es')` default in `LanguageContext.jsx`.
- **All async logic belongs in hooks**, not components.
- **The Anthropic API key must never appear in the codebase** — it is read server-side only, from environment variables.
