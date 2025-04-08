import React, { useState } from 'react'

export default function TaskEditing() {
  let loggedin = true
  const [darkMode, setDarkMode] = useState(false)
  const [show, setShow] = useState(false)
  return (
    <div style={{backgroundColor: darkMode ? "black" : "white",color: darkMode ? "white" : "black"}}>
      <div>
        {darkMode ? "Қараңғы режимі қосулы" : "Жарық режимі қосулы"}
      </div>
      {/* {loggedin ? "Сіз жүйеге кірдіңіз" : "Сіз өкінішке орай кіре алмадыңыз"}
      {loggedin && "Сіз жүйеге кірдіңіз"} */}
      <button onClick={()=>setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button onClick={()=>setShow(!show)}>
        {show ? "Жинау":"Show more"}
      </button>
      <p>{show && "Бұл қосымша текст"}</p>
    </div>
  )
}