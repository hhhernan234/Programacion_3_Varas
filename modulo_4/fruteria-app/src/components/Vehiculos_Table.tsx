// src/components/SimpleInfoVehiculos.tsx

interface VehiculosRow {
  marca: string
  modelo: string
  año?: number
  precio?: number
  highlight?: boolean
}

interface SimpleInfoVehiculosProps {
  title?: string
  rows: VehiculosRow[]
}

export default function SimpleInfoVehiculos({ title, rows }: SimpleInfoVehiculosProps) {
  return (
    <div style={{ maxWidth: 360 }}>
      {title && <h3 style={{ marginBottom: 8, fontSize: 15 }}>{title}</h3>}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.marca}
              style={{
                backgroundColor: row.highlight ? '#fef9c3' : 'transparent',
              }}
            >
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  color: '#6b7280',
                  width: '45%',
                }}
              >
                {row.precio}
              </td>
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  fontWeight: row.highlight ? 600 : 400,
                }}
              >
                {row.modelo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}