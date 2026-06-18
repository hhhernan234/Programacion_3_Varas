// src/App.tsx


import Vehiculos_Table    from './components/Vehiculos_Table'

const PASO = 1


export default function App() {
  const content =
    PASO === 1 ? (
      <Vehiculos_Table
        title="Resumen del pedido"
        rows={[
          { marca: 'Toyota', modelo: 'Camry', precio: 25000, highlight: false },
          { marca: 'Honda', modelo: 'Civic', precio: 20000, highlight: false },
          { marca: 'Ford', modelo: 'F-150', precio: 30000, highlight: true },
        ]}
      />
    ) :
    
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}