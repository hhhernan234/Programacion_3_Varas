// src/App_mp.tsx

import TituloNomina_mp             from './components/TituloNomina_mp'
import EstadoConexionNomina_mp     from './components/EstadoConexionNomina_mp'
import TamanoVentanaNomina_mp      from './components/TamanoVentanaNomina_mp'
import RelojFichaje_mp             from './components/RelojFichaje_mp'
import BusquedaConceptoNomina_mp   from './components/BusquedaConceptoNomina_mp'
import BusquedaEmpleadoDebounce_mp from './components/BusquedaEmpleadoDebounce_mp'
import FetchEmpleadoNomina_mp      from './components/FetchEmpleadoNomina_mp'
import AutoFocusBusquedaEmpleado_mp from './components/AutoFocusBusquedaEmpleado_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.       │
// │  1  TituloNomina_mp             — useEffect con array vacío, limpia │
// │  2  EstadoConexionNomina_mp     — subscripción a eventos online/off  │
// │  3  TamanoVentanaNomina_mp      — evento resize con estado tipado    │
// │  4  RelojFichaje_mp             — setInterval con init. perezoso     │
// │  5  BusquedaConceptoNomina_mp   — efecto con dependencia, búsqueda   │
// │  6  BusquedaEmpleadoDebounce_mp — setTimeout/clearTimeout, debounce  │
// │  7  FetchEmpleadoNomina_mp      — fetch real, loading/error, cancel  │
// │  8  AutoFocusBusquedaEmpleado_mp— useRef + useEffect, foco imperativo│
// └──────────────────────────────────────────────────────────────────────┘
const PASO: number = 7

export default function App_mp() {
  const content =
    PASO === 1 ? <TituloNomina_mp /> :
    PASO === 2 ? <EstadoConexionNomina_mp /> :
    PASO === 3 ? <TamanoVentanaNomina_mp /> :
    PASO === 4 ? <RelojFichaje_mp /> :
    PASO === 5 ? <BusquedaConceptoNomina_mp /> :
    PASO === 6 ? <BusquedaEmpleadoDebounce_mp /> :
    PASO === 7 ? <FetchEmpleadoNomina_mp /> :
    PASO === 8 ? <AutoFocusBusquedaEmpleado_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
