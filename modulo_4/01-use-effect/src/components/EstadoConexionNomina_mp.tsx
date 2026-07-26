// src/components/EstadoConexionNomina_mp.tsx

import { useState, useEffect } from 'react'

export default function EstadoConexionNomina_mp() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    function handleOnline()  { setIsOnline(true)  }
    function handleOffline() { setIsOnline(false) }

    window.addEventListener('online',  handleOnline)
    window.addEventListener('offline', handleOffline)

    // Limpieza — se ejecuta al desmontar
    return () => {
      window.removeEventListener('online',  handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <div>
      <p style={{ color: isOnline ? '#166534' : '#991b1b', fontWeight: 500 }}>
        {isOnline ? '🟢 Conectado — sincronizando nóminas' : '🔴 Sin conexión — cambios sin guardar en el servidor'}
      </p>
      <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
        El sistema de nóminas necesita conexión para sincronizar los pagos con el servidor.
      </p>
    </div>
  )
}
