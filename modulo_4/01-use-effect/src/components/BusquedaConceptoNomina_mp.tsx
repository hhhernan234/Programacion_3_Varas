// src/components/BusquedaConceptoNomina_mp.tsx

import { useState, useEffect } from 'react'

const CONCEPTOS_NOMINA: Record<string, string> = {
  'salario base':  'Monto fijo mensual pactado en el contrato del empleado.',
  'horas extra':   'Recargo por horas trabajadas fuera de la jornada ordinaria.',
  'bonificacion':  'Pago adicional por desempeño u objetivos cumplidos.',
  'iess':          'Aporte al Instituto de Seguridad Social, descontado del sueldo.',
  'decimo tercero': 'Bono legal equivalente a un mes de sueldo, pagado en diciembre.',
}

export default function BusquedaConceptoNomina_mp() {
  const [query,  setQuery]  = useState('')
  const [result, setResult] = useState<string | null>(null)

  useEffect(() => {
    const normalized = query.toLowerCase().trim()

    if (!normalized) {
      setResult(null)
      return
    }

    const found = CONCEPTOS_NOMINA[normalized]
    setResult(found ?? 'Sin resultados para ese concepto de nómina.')
  }, [query])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 340 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busca: salario base, horas extra, iess..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      {result && (
        <p style={{ margin: 0, fontSize: 14, color: '#374151', padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          {result}
        </p>
      )}
    </div>
  )
}
