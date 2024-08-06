
import { any } from 'prop-types';
import Movie from './Movie';

function MovieList({movies}) {
  return (
    <div>
        <ul className="list">
                    {movies?.map((movie) => (
                       <Movie key={movie.imdbID} movie={movie}/>
                    ))}
                </ul>
    </div>
  )
}
MovieList.propTypes = {
  movies: any
}

export default MovieList