// src/components/CatalogProductItem_mp.tsx
// Sin cambios respecto a la página 3 — el componente ya era correcto

interface CatalogConceptoItemProps {
  id: number
  name: string
  price: number
  onAddToCart: (id: number, name: string, price: number) => void
}

export default function CatalogProductItem_mp({
  id,
  name,
  price,
  onAddToCart,
}: CatalogConceptoItemProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
        borderBottom: '1px solid #eee',
      }}
    >
      <div>
        <p style={{ margin: 0, fontWeight: 500 }}>{name}</p>
        <p style={{ margin: 0, fontSize: 13, color: '#888' }}>${price.toFixed(2)}</p>
      </div>
      <button
        onClick={() => onAddToCart(id, name, price)}
        style={{
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '6px 14px',
          cursor: 'pointer',
        }}
      >
        + Agregar
      </button>
    </div>
  )
}
