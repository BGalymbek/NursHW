import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Search({nursSearch}) {
  const [filmInput, setFilmInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    try{
      let response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&s=${filmInput}`)
      if(response.data.Response == "True"){
        nursSearch(response.data.Search)
        setFilmInput('')
        setIsLoading(false)
      }else{
        nursSearch([])
        setFilmInput('')
        setIsLoading(false)
      }
    }catch(err){
      console.error(err.message)
      setFilmInput('')
      setIsLoading(false)
    }
  }
  return (
    <div>
      <h1>Movie Search App</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Қалаған фильмінді тер...'
          value={filmInput}
          onChange={(e)=>setFilmInput(e.target.value)}
        />
        <button 
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? "Ізделуде...": "Іздеу"}
        </button>  
      </form> 
    </div>
  )
}
