import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import RomReader from './RomReader.tsx'
import Interpreter from './Interpreter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RomReader></RomReader>
    <Interpreter></Interpreter>

  </StrictMode>,
)
