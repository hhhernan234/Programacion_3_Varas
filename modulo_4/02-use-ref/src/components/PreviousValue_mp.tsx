// src/components/PreviousValue_mp.tsx

import { useState, useRef, useEffect } from 'react'

export default function PreviousValue_mp() {
  const [sueldo, setSueldo] = useState('')
  const anteriorRef = useRef('')

  useEffect(() => {
    // Se ejecuta DESPUÉS de renderizar con el nuevo `sueldo`,
    // así que aquí guardamos el valor que quedará "anterior" en el próximo render
    anteriorRef.current = sueldo
  }, [sueldo])

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <input
        value={sueldo}
        onChange={(e) => setSueldo(e.target.value)}
        placeholder="Escribe un sueldo..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 16, fontSize: 14 }}>
        <p style={{ margin: 0 }}>
          Actual: <strong>{sueldo || '—'}</strong>
        </p>
        <p style={{ margin: 0, color: '#6b7280' }}>
          Anterior: <strong>{anteriorRef.current || '—'}</strong>
        </p>
      </div>
    </div>
  )
}
