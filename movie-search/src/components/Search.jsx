import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Search({onSearch}) {
    const [filmInput, setFilmInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const handleSearch = async(e)=>{
        e.preventDefault()
        setIsLoading(true)
        try{
            let response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&s=${filmInput}`)
            if(response.data.Response == "True"){
                onSearch(response.data.Search)
                setIsLoading(false)
                setFilmInput('')
            }else{
                onSearch([])
                setFilmInput('')
                setIsLoading(false)
            }
        }catch(err){
            console.error(err)
        }
    }

  return (
    <div>
        <h1>Movie Search App</h1>
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder='Искать фильм...'
                value={filmInput}
                onChange={(e)=>setFilmInput(e.target.value)}
            />
            <button 
                type='submit'
                disabled={isLoading}
            >
                    {isLoading ? "Ищем..." : "Искать"}
            </button>
        </form>
    </div>
  )
}
