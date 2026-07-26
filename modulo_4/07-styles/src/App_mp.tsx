// src/App_mp.tsx


import CssGlobalDemo_mp        from './components/CssGlobalDemo_mp'
import { ThemeProvider } from 'styled-components'
import InlineStyleDemo_mp      from './components/InlineStyleDemo_mp'
import CssModuleDemo_mp        from './components/CssModuleDemo_mp'
import StyledComponentsDemo_mp from './components/StyledComponentsDemo_mp'
import LiveStyleEditor_mp      from './components/LiveStyleEditor_mp'
import HoverDemo_mp            from './components/HoverDemo_mp'
import ThemePanel_mp           from './components/ThemePanel_mp'
import './theme/theme_mp.css'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  Sistema de Control de Nóminas                                       │
// │  1  CssGlobalDemo_mp        — clases globales y riesgo de colisión     │
// │  2  InlineStyleDemo_mp      — objetos JS, sin :hover ni @media         │
// │  3  CssModuleDemo_mp        — scope local, :hover con CSS Modules      │
// │  4  StyledComponentsDemo_mp — CSS-in-JS con props transient ($)        │
// │  5  LiveStyleEditor_mp      — hook useStyles_mp para estilos dinámicos │
// │  6  HoverDemo_mp            — hook useHover_mp para efectos hover      │
// │  7  ThemePanel_mp           — Context + CSS variables para theming     │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function App_mp() {
  const content =
    PASO === 1 ? <CssGlobalDemo_mp /> :
    PASO === 2 ? <InlineStyleDemo_mp /> :
    PASO === 3 ? <CssModuleDemo_mp /> :
    PASO === 4 ? <StyledComponentsDemo_mp /> :
    PASO === 5 ? <LiveStyleEditor_mp /> :
    PASO === 6 ? <HoverDemo_mp /> :
    PASO === 7 ? <ThemePanel_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <ThemeProvider theme={{}}>
      <main style={{ maxWidth: 640, margin: '0 auto', padding: '32px 16px' }}>
        {content}
      </main>
    </ThemeProvider>
  )
}
