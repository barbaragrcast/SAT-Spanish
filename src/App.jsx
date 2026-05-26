import { useState } from 'react';
import { PantallaInicio } from './screens/PantallaInicio.jsx';
import { PantallaEnsayo } from './screens/PantallaEnsayo.jsx';
import { PantallaBanco } from './screens/PantallaBanco.jsx';
import { PantallaPregunta } from './screens/PantallaPregunta.jsx';
import { PantallaProgreso } from './screens/PantallaProgreso.jsx';

export function App() {
  const [pantalla, setPantalla] = useState('inicio');

  if (pantalla === 'ensayo')       return <PantallaEnsayo   onVolver={() => setPantalla('inicio')} />;
  if (pantalla === 'banco')        return <PantallaBanco     onVolver={() => setPantalla('inicio')} />;
  if (pantalla === 'progreso')     return <PantallaProgreso  onVolver={() => setPantalla('inicio')} />;
  if (pantalla === 'pregunta-rw')  return <PantallaPregunta  tipo="lectura-escritura" onVolver={() => setPantalla('inicio')} />;
  if (pantalla === 'pregunta-mat') return <PantallaPregunta  tipo="matematicas"       onVolver={() => setPantalla('inicio')} />;

  return <PantallaInicio onNavegar={setPantalla} />;
}
