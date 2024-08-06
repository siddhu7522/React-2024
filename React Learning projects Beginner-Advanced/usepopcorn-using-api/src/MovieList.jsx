
import { any } from 'prop-types';
import Movie from './Movie';

function MovieList({movies, selectMovie}) {
  return (
    <div>
        <ul className="list">
                    {movies?.map((movie) => (
                       <Movie selectMovie={selectMovie} key={movie.imdbID} movie={movie}/>
                    ))}
                </ul>
    </div>
  )
}
MovieList.propTypes = {
  movies: any
}

export default MovieList