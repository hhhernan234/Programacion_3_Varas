// src/components/TamanoVentanaNomina_mp.tsx

import { useState, useEffect } from 'react'

interface WindowDimensions {
  width:  number
  height: number
}

export default function TamanoVentanaNomina_mp() {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    width:  window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width:  window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <p style={{ fontFamily: 'monospace', fontSize: 14, color: '#374151' }}>
        Panel de nóminas: {dimensions.width} × {dimensions.height} px
      </p>
      <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
        Útil para adaptar la tabla de empleados a pantallas pequeñas.
      </p>
    </div>
  )
}
