import { any } from 'prop-types'

function Movie({movie, selectMovie}) {
  return (
    <li key={movie.imdbID} onClick={()=>selectMovie(movie.imdbID)}>
    <img src={movie.Poster} alt={`${movie.Title} poster`} />
    <h3>{movie.Title}</h3>
    <div>
        <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
        </p>
    </div>
</li>
  )
}
Movie.propTypes = {
  movie: any
}

export default Movie