import React, { useState } from 'react'

export default function Hw() {
  let [isLoggedIn, setLoggedIn] = useState(false)
  const [register,setRegister] = useState(false)
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        {register ? 
            (
                <>
                    <h2>Register Form</h2>
                    <form className='form'>
                        <input type="text" placeholder='Enter email or number'/>
                        <input type="password" placeholder='Enter new password'/>
                        <button>Register</button>
                    </form>
                </>
            )
            : 
            (
                <>
                    <h2>{isLoggedIn ? "Бастапқы бетке қош келдіңіз": "Жүйеге кіру қажет"}</h2>
                    <button onClick={()=>setLoggedIn(!isLoggedIn)}>
                        {!isLoggedIn ? "Login" : "Log out"}
                    </button>
                    <button
                        onClick={()=>setRegister(true)}
                        style={{marginTop:"10px", display: isLoggedIn ? "none" : "inline-block"}}
                    >{isLoggedIn ? "":"Register"}</button>
                </>
            )   
        }
    </div>
  )
}
