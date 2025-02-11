import { any } from 'prop-types'

function Movie({movie}) {
  return (
    <li key={movie.imdbID}>
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