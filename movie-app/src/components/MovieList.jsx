import React from 'react'
import {Link} from 'react-router-dom'

export default function MovieList({filmder}) {
  console.log(filmder);
  return (
    <div>
      {filmder.length > 0 ?
      (
        filmder.map((element)=>{
          return(
            <Link to={`/movies/${element.imdbID}`} key={element.imdbID}>
              <div>
                <img 
                  src={element.Poster == "N/A" ? 
                     'https://avatars.mds.yandex.net/i?id=d20c70074f33b17ce2ad720acc8149b8_l-8220915-images-thumbs&n=13' 
                     : 
                     element.Poster
                  }
                  alt="film-img"
                />
                <h3>{element.Title}</h3>
                <div>
                  <p>{element.Year}</p>
                  <span>*</span>
                  <p>{element.Type == "movie" ? "Фильмы" : "Сериалы"}</p>  
                </div>  
              </div>              
            </Link>
          )
        })
      ):
      (
        <p>Фильм табылмады. Сұранысты қайта жіберуіңізді сұраймын</p>
      ) 
      }
    </div>
  )
}
