import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ClipPathProvider from './context/clipPathContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ClipPathProvider>
    <App />
  </ClipPathProvider>
  </BrowserRouter>,
)
