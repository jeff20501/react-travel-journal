import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './travel_journal/index.css'
import { Page } from './travel_journal/travel'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
