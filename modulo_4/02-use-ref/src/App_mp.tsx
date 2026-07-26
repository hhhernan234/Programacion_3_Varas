// src/App_mp.tsx

import AutoFocusForm_mp    from './components/AutoFocusForm_mp'
import InlineEditor_mp from './components/InlineEditor_mp'
import PreviousValue_mp from './components/PreviousValue_mp'
import Stopwatch_mp        from './components/Stopwatch_mp'


// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  Sistema de Control de Nóminas                                       │
// │  1  AutoFocusForm_mp — useRef: foco automático y tecla Enter        │
// │  2  Stopwatch_mp     — useRef: interval sin re-renders extra        │
// │  3  InlineEditor_mp  — useRef: lectura del DOM sin estado intermedio │
// │  4  PreviousValue_mp — useRef: guarda el valor anterior              │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function App_mp() {
  const content =
    PASO === 1 ? <AutoFocusForm_mp /> :
    PASO === 2 ? <Stopwatch_mp /> :
    PASO === 3 ? <InlineEditor_mp /> :
    PASO === 4 ? <PreviousValue_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
