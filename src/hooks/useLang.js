import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { copy } from '../copy';

/**
 * useLang — primary hook for bilingual string access.
 *
 * Usage:
 *   const { t, idioma, alternarIdioma } = useLang();
 *   <p>{t('preguntaDelDia')}</p>
 *
 * `t(clave)` returns the string for the active language.
 * If the key doesn't exist in copy.js it returns the key itself —
 * this makes missing translations immediately visible during development.
 *
 * @returns {{ t: (clave: string) => string, idioma: 'es'|'en', alternarIdioma: () => void }}
 */
export function useLang() {
  const { idioma, alternarIdioma } = useContext(LanguageContext);

  const t = (clave) => copy[clave]?.[idioma] ?? clave;

  return { t, idioma, alternarIdioma };
}
