// src/App_mp.tsx

import BasicCounter_mp     from './components/BasicCounter_mp'
import RegistrationForm_mp from './components/RegistrationForm_mp'
import ShoppingCart_mp     from './components/ShoppingCart_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  Sistema de Control de Nóminas                                       │
// │  1  BasicCounter_mp      — useReducer básico con acciones tipadas      │
// │  2  RegistrationForm_mp  — formulario con validación y estados de envío│
// │  3  ShoppingCart_mp      — rol de pagos completo                       │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function App_mp() {
  const content =
    PASO === 1 ? <BasicCounter_mp /> :
    PASO === 2 ? <RegistrationForm_mp /> :
    PASO === 3 ? <ShoppingCart_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
