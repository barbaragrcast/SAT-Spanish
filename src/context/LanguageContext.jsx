import { createContext, useState } from 'react';

/**
 * LanguageContext
 *
 * Provides { idioma, alternarIdioma } to the entire component tree.
 *
 * Rules:
 *  - Default language is ALWAYS 'es' (Spanish). Never change this default.
 *  - State lives only in React — do not persist idioma to localStorage.
 *  - LanguageProvider must wrap the app root in main.jsx.
 */
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Spanish is the initial and default render state — never derive this
  // from localStorage, navigator.language, or any external source.
  const [idioma, setIdioma] = useState('es');

  const alternarIdioma = () =>
    setIdioma((prevIdioma) => (prevIdioma === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ idioma, alternarIdioma }}>
      {children}
    </LanguageContext.Provider>
  );
}
