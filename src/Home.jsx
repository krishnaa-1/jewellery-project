import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Jewellist from './Jewellist.jsx'
import R from './R.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <R />
  </StrictMode>,
)

