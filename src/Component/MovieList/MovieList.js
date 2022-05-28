
import { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({tabldata, searchTitle, rate, delMovie}) => {





  return (
    <div>
      {tabldata.filter( movie =>{return movie.title.toLowerCase().match(searchTitle.toLowerCase().trim()) &&
            movie.rating >= rate }).map((el) => (<MovieCard delMovie={delMovie} key={el.id} el={el} />))}
    </div>
  )
}

export default MovieList