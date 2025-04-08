import React, { useContext } from 'react'
import { TextContext } from './TextProvider'

export default function Main2() {
  let { mode, toggleMode } = useContext(TextContext) 
  return (
    <div>
        <h3>Қазіргі режим түрі: {mode}</h3>
        <button onClick={toggleMode}>
            Change to {mode == "light" ? "Dark": "Light"} mode
        </button>
    </div>
  )
}
