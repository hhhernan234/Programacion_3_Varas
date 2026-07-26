// src/components/BusquedaEmpleadoDebounce_mp.tsx

import { useState, useEffect } from 'react'

export default function BusquedaEmpleadoDebounce_mp() {
  const [nombreEmpleado, setNombreEmpleado] = useState('')
  const [busquedaFinal,  setBusquedaFinal]  = useState('')

  useEffect(() => {
    // Se ejecuta 500ms después de que el usuario dejó de escribir
    const timer = setTimeout(() => {
      setBusquedaFinal(nombreEmpleado)
    }, 500)

    // La limpieza cancela el timer si el nombre vuelve a cambiar
    // antes de que pasen los 500ms
    return () => clearTimeout(timer)
  }, [nombreEmpleado])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <input
        value={nombreEmpleado}
        onChange={(e) => setNombreEmpleado(e.target.value)}
        placeholder="Nombre del empleado..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
        Búsqueda debounced (500ms): <strong>{busquedaFinal || '—'}</strong>
      </p>
      <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
        Útil para evitar llamadas a la API de nómina en cada pulsación de tecla.
      </p>
    </div>
  )
}
