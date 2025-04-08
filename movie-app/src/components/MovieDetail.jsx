import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function MovieDetail() {
  let { id } = useParams()
  
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  console.log(movie);
  
  useEffect(()=>{
    async function fetchData(){
      try{
        let response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&i=${id}&plot=full`)
        if(response.status == 200 || response.status == 201){
          setMovie(response.data)
          setIsLoading(false)
        }
      }catch(err){
        console.error(err.message)
        setIsLoading(false)
        setError(err.message)
      }
    }
    fetchData()
  },[id])

  if(isLoading) return <p>Загрузка...</p>

  if(error) return <p style={{ color:"red" }}>{error}</p>

  return (
    <div>
        <div className='image-box'>
            <img 
              src={movie.Poster == "N/A" ? 
                "https://avatars.mds.yandex.net/i?id=d20c70074f33b17ce2ad720acc8149b8_l-8220915-images-thumbs&n=13"
                :
                movie.Poster
              } 
              alt="detailed-img"
            />
        </div>
        <div className='detailed-info'>
            <h1>{movie.Title}<span>({movie.Year})</span></h1>
            <ul>
              <li>IMDb: {movie.imdbRating}</li>
              <li>{movie.Runtime}</li>
              <li>{movie.Rated}</li>
            </ul>
            <p>{movie.Plot}</p>
            <div>
              <div>
                  <h3>Режиссер</h3>
                  <p>{movie.Director}</p>
              </div>
              <div>
                  <h3>Актеры</h3>
                  <p>{movie.Actors}</p>
              </div>
              <div>
                  <h3>Жанр</h3>
                  <p>{movie.Genre}</p>
              </div>
            </div>
            <div>
              <Link to={'/'}>
                  Бастапқы бетке қайту
              </Link>
            </div>
        </div>
    </div>
  )
}
