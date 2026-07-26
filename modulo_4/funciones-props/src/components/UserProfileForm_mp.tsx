import { useState } from 'react'

interface EmpleadoProfile {
  name: string
  email: string
  age: number
  city: string
}

export default function UserProfileForm_mp() {
  const [profile, setProfile] = useState<EmpleadoProfile>({
    name: '',
    email: '',
    age: 0,
    city:''
  })

  function handleChange(field: keyof EmpleadoProfile, value: string | number) {
    setProfile((prev) => ({
      ...prev,        // copia todos los campos actuales
      [field]: value, // sobreescribe solo el campo que cambió
    }))
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
      <input
        placeholder="Nombre del empleado"
        value={profile.name}
        onChange={(e) => handleChange('name', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Email"
        type="email"
        value={profile.email}
        onChange={(e) => handleChange('email', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Edad"
        type="number"
        value={profile.age}
        onChange={(e) => handleChange('age', Number(e.target.value))}
        style={inputStyle}
      />
      <input
        placeholder="Departamento"
        type="string"
        value={profile.city}
        onChange={(e) => handleChange('city', Number(e.target.value))}
        style={inputStyle}
      />

      <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{profile.name || '—'}</strong> · {profile.email || '—'} · {profile.age || '—'} años · {profile.city || '—'} departamento 
        </p>
      </div>
    </form>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 14,
}
