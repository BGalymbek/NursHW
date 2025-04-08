import React, { useState, useEffect } from "react";

export default function ProfileCard() {
  const [products] = useState(["📱 Телефон", "💻 Ноутбук", "🎧 Құлаққап", "⌚ Сағат", "📷 Камера"]);
  const [recent, setRecent] = useState(()=>{
    let savedViewed = JSON.parse(localStorage.getItem('recentViewed'))
    return savedViewed == null ? [] : savedViewed 
  })
  
  useEffect(()=>{
    localStorage.setItem('recentViewed',JSON.stringify(recent))
  },[recent])

  const handleClick = (ind)=>{
      setRecent([products[ind], ...recent.filter((el)=> el != products[ind])])
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>🛒 Өнімдер</h2>
        {products.map((product,index)=>{
            return <button key={index} onClick={()=>handleClick(index)} style={{ margin: "5px" }}>{product}</button>
        })}

        <h3>Соңғы қаралғандар:</h3>
        <ul>
          {recent.map((product,index)=>{
              return <li key={index}>{product}</li>
          })}
        </ul>
      </div>
    );
  }
