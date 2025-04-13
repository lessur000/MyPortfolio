import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Styles/Global.css'
import App from './Routes/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
