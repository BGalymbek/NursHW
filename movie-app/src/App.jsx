import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from './components/Search'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'

function App(){
  const [movies, setMovies] = useState([])
  console.log("AppJSX movies:",movies);
  return (
    <BrowserRouter>
        <Search nursSearch = {setMovies}/>
        <Routes>
            <Route path='/' element={<MovieList filmder={movies}/>}/>
            <Route path='/movies/:id' element={<MovieDetail/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
