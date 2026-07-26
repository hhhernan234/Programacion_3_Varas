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
    id: 1,
    nombre: 'Chihuahua',
    precio: 89.99,
    tipo: 'Toy',
    outOfStock: false,
  },
  {
    id: 2,
    nombre: 'Labrador Retriever',
    precio: 349.99,
    tipo: 'Grande',
    outOfStock: false,
  },
  {
    id: 3,
    nombre: 'Bulldog Francés',
    precio: 29.99,
    outOfStock: true,
    tipo: 'Mediano',
  },
  {
    id: 4,
    nombre: 'Golden Retriever',
    precio: 59.99,
    tipo: 'Grande',
    outOfStock: false,
  },
  {
    id: 5,
    nombre: 'Beagle',
    precio: 39.99,
    tipo: 'Mediano',
    outOfStock: false,
  },
]

export default function MascotaCatalog() {
  return (
    <main
      style={{
        maxWidth: 540,
        margin: '40px auto',
        fontFamily: 'sans-serif',
      }}
    >
      <MascotaCatalogList
        mascotas={catalog}
        title="Catálogo de Mascotas"
      />
    </main>
  )
}