import React, { useState } from 'react'

export default function EditingClasswork() {
    const [show,setShow] = useState(false)
  return (
    <div>
        <button onClick={()=>setShow(!show)}>
            {show ? "Жасыру" : "Show more"}
        </button>
        {show && <p>"Бұл жасырын текст"</p>}
    </div>
  )
}
