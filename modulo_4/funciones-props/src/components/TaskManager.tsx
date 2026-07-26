import { useState } from 'react'

interface Task {
  id: number
  title: string
  text: string
  done: boolean
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputTitle, setInputTitle] = useState('')
  const [inputText, setInputText] = useState('')

  function addTask() {
    if (!inputTitle.trim() || !inputText.trim()) return
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: inputTitle.trim(), text: inputText.trim(), done: false },
    ])
    setInputTitle('')
    setInputText('')
  }

  function removeTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  return (
    <div style={{ maxWidth: 420 }}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        <input
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          placeholder="Título de la tarea..."
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="Descripción..."
            style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
          />
          <button
            onClick={addTask}
            style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
          >
            Agregar
          </button>
        </div>
      </div>

      {tasks.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No hay tareas. ¡Agrega una!</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              style={{ marginTop: 4 }}
            />
            <div style={{ flex: 1 }}>
              <p style={{
                margin: 0,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: task.done ? 'line-through' : 'none',
                color: task.done ? '#aaa' : '#333',
              }}>
                {task.title}
              </p>
              <p style={{
                margin: '2px 0 0',
                fontSize: 13,
                textDecoration: task.done ? 'line-through' : 'none',
                color: task.done ? '#bbb' : '#666',
              }}>
                {task.text}
              </p>
            </div>
            <button
              onClick={() => removeTask(task.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16 }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          {tasks.filter((t) => t.done).length} de {tasks.length} completadas
        </p>
      )}
    </div>
  )
}