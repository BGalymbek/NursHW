import React, { createContext, useState } from 'react'

let secretArr = {
   en:"Mission starts at midnight.",
   kk:"Миссия түн ортасында басталады.",
   ru:"Миссия начинается в полночь."
  }
export const TextContext = createContext()

export default function TextProvider({children}) {
  const [secret, setSecret] = useState(secretArr["kk"])

  const toggleNext = (lang)=>{
      console.log("Language: ",lang);
      setSecret(secretArr[lang])
  }


  return (
    <TextContext.Provider value={{ secret, toggleNext }}>
      {children}
    </TextContext.Provider>
  )
}
