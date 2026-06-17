import MascotaCatalogList from "./components/ProductMascotasList"

interface Mascotas {
  outOfStock: boolean
  id: number
  nombre: string
  tipo: string
  edad?: number
  precio: number
}

const catalog: Mascotas[] = [
  {
    id: 1, nombre: 'CHIGUAGAUA', precio: 89.99, tipo: 'Perros',
    outOfStock: false
  },
  {
    id: 2, nombre: 'Monitor 27"', precio: 349.99, tipo: 'Periféricos',
    outOfStock: false
  },
  { id: 3, nombre: 'Mouse inalámbrico', precio: 29.99, outOfStock: true, tipo: 'Periféricos' },
  { id: 4, nombre: 'Webcam HD',         precio: 59.99, tipo: 'Periféricos', outOfStock: false },
  { id: 5, nombre: 'Hub USB-C', precio: 39.99, tipo: 'Periféricos', outOfStock: false },
]

export default function MascotaCatalog() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>


      <MascotaCatalogList 
      mascotas={catalog} 
      title="Catálogo de Mascotas" />

    </main>
  )
}