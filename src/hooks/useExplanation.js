import { useState } from 'react';

/**
 * useExplanation — manages the Anthropic API "Explícame más" lifecycle.
 *
 * This is the ONLY place Anthropic API calls may live.
 * The API key is handled server-side only (proxy layer) — this hook
 * never reads import.meta.env or any key directly.
 *
 * Model: claude-sonnet-4-20250514
 *
 * @returns {{
 *   explicacion: string | null,
 *   cargando: boolean,
 *   error: string | null,
 *   obtenerExplicacion: (pregunta: Object, idioma: 'es'|'en') => Promise<void>
 * }}
 */
export function useExplanation() {
  const [explicacion, setExplicacion] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const obtenerExplicacion = async (pregunta, idioma) => {
    setCargando(true);
    setError(null);
    setExplicacion(null);

    try {
      const respuesta = await fetch('/api/explicar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pregunta, idioma }),
      });

      if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status}`);
      }

      const datos = await respuesta.json();
      setExplicacion(datos.explicacion);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  return { explicacion, cargando, error, obtenerExplicacion };
}
