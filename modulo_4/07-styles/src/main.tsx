import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/global.css'
import App_mp from './App_mp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App_mp />
  </StrictMode>,
)
