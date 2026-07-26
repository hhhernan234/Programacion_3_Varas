// src/App_mp.tsx

import { useState } from 'react'
import DigitalCounter_mp      from './components/DigitalCounter_mp'
import SafeCounter_mp         from './components/SafeCounter_mp'
import UserProfileForm_mp     from './components/UserProfileForm_mp'
import TaskManager_mp         from './components/TaskManager_mp'
import CatalogProductItem_mp from './components/CatalogProductItem_mp'
import ShoppingCartSummary_mp from './components/ShoppingCartSummary_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  Sistema de Control de Nóminas                                       │
// │  1  DigitalCounter_mp    — estado numérico con step y reset            │
// │  2  SafeCounter_mp       — forma funcional prev => prev + 1            │
// │  3  UserProfileForm_mp   — estado con objeto + spread update           │
// │  4  TaskManager_mp       — estado con array: filter, map, spread       │
// │  5  Rol de pagos useState — array de objetos + lógica en App_mp.tsx    │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 2

interface ConceptoItem { id: number; name: string; price: number }

const catalogoConceptos = [
  { id: 1, name: 'Sueldo base',          price: 450.00 },
  { id: 2, name: 'Bono de antigüedad',   price:  50.00 },
  { id: 3, name: 'Horas extra',          price:  25.00 },
]

export default function App_mp() {
  const [cartItems, setCartItems] = useState<ConceptoItem[]>([])

  function handleAddToCart(id: number, name: string, price: number) {
    const alreadyInCart = cartItems.some((item) => item.id === id)
    if (alreadyInCart) return
    setCartItems((prev) => [...prev, { id, name, price }])
  }

  function handleClearCart() {
    setCartItems([])
  }

  const content =
    PASO === 1 ? <DigitalCounter_mp label="Empleados" step={1} /> :
    PASO === 2 ? <SafeCounter_mp /> :
    PASO === 3 ? <UserProfileForm_mp /> :
    PASO === 4 ? <TaskManager_mp /> :
    PASO === 5 ? (
      <>
        <h1 style={{ fontSize: 22 }}>Conceptos de Nómina</h1>
        <section>
          {catalogoConceptos.map((c) => (
            <CatalogProductItem_mp
              key={c.id}
              id={c.id}
              name={c.name}
              price={c.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </section>
        <ShoppingCartSummary_mp items={cartItems} onClearCart={handleClearCart} />
      </>
    ) :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
