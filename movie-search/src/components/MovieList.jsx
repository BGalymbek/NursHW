import React from 'react'
import {Link} from 'react-router-dom'

export default function MovieList({movies}) {
  return (
    <div>
         {movies.length > 0 ? 
            movies.map((film)=>{
              return(
                <Link to={`/movies/1`} key={film.imdbID}>
                    <div>
                        <img 
                          src={film.Poster ? film.Poster : "https://www.salto.pro/local/templates/salto/build/img/placeholder.png"} 
                          alt="film-image"
                        />
                        <div>
                          <p>{film.Title}</p>
                          <span>*</span>
                          <p>{film.Year}</p>
                        </div>
                    </div>
                </Link>
              )
            })
          :
            <p>Фильм не найден, напишите запрос</p>
         } 
    </div>
  )
}
