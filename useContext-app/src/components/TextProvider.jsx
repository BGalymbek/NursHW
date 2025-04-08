import React, { createContext, useState } from 'react'

export const TextContext = createContext()

export default function TextProvider({children}) {
  let [mode, setMode] = useState('light')

  const toggleMode = ()=>{
    setMode(mode == "light" ? 'dark' : 'light')
  }

  return (
    <TextContext.Provider value={{ mode, toggleMode }}>
      {children}
    </TextContext.Provider>
  )
}
