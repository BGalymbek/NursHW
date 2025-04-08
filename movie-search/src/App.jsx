import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

import MovieDetail from './pages/MovieDetail'
import MovieList from './components/MovieList'
import Search from './components/Search'

function App() {
  const [movies, setMovies] = useState([])
  console.log(movies)
  return (
    <BrowserRouter>
      <Search onSearch={setMovies}/>
      <Routes>
          <Route path='/' element={<MovieList movies={movies}/>}/>
          <Route path='/movies/:id' element={<MovieDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
