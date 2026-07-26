// src/components/RelojFichaje_mp.tsx

import { useState, useEffect } from 'react'

export default function RelojFichaje_mp() {
  // Inicializador perezoso — new Date() se llama una sola vez
  const [hora, setHora] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date())
    }, 1000)

    // Limpieza obligatoria — detiene el interval al desmontar
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p style={{ fontFamily: 'monospace', fontSize: 28, margin: 0, letterSpacing: 2 }}>
        {hora.toLocaleTimeString('es-ES')}
      </p>
      <p style={{ margin: '4px 0 0', fontSize: 12, color: '#9ca3af' }}>
        Hora exacta de fichaje / marcaje de entrada y salida del empleado.
      </p>
    </div>
  )
}
