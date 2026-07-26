// src/components/TituloNomina_mp.tsx

import { useEffect } from 'react'

export default function TituloNomina_mp() {
  const periodoActual = 'Julio 2026'

  useEffect(() => {
    document.title = `Nóminas — ${periodoActual}`
    console.log('TituloNomina_mp montado, título cambiado')
    console.log('Periodo de nómina activo:', periodoActual)

    // Limpieza: restaurar el título al desmontar
    return () => {
      document.title = 'Control de Nóminas'
      console.log('TituloNomina_mp desmontado, título restaurado')
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título de la pestaña cambió al entrar al módulo de nóminas.
    </p>
  )
}
