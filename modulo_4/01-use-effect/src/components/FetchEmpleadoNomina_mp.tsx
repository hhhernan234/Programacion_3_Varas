// src/components/FetchEmpleadoNomina_mp.tsx

import { useState, useEffect } from 'react'

interface Empleado {
  id:       number
  name:     string
  email:    string
  username: string
  website:  string
  address: {
    calle:  string
    ciudad: string
  }
}

export default function FetchEmpleadoNomina_mp() {
  const [empleadoId, setEmpleadoId] = useState(1)
  const [empleado,   setEmpleado]   = useState<Empleado | null>(null)
  const [loading,    setLoading]    = useState(false)
  const [error,      setError]      = useState<string | null>(null)

  useEffect(() => {
    // Flag de cancelación — evita race conditions y
    // actualizaciones de estado en componentes desmontados
    let cancelled = false

    async function fetchEmpleado() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${empleadoId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Empleado = await res.json()

        // Solo actualiza si el componente sigue montado
        if (!cancelled) setEmpleado(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchEmpleado()

    return () => { cancelled = true }
  }, [empleadoId])

  return (
    <div style={{ maxWidth: 360 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setEmpleadoId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: empleadoId === id ? '#0070f3' : '#fff',
              color:      empleadoId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: empleadoId === id ? 600 : 400,
            }}
          >
            Empleado {id}
          </button>
        ))}
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando datos de nómina...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {empleado && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{empleado.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            Código: @{empleado.username}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {empleado.email}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {empleado.website}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {empleado.address.calle}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {empleado.address.ciudad}
          </p>
        </div>
      )}
    </div>
  )
}
