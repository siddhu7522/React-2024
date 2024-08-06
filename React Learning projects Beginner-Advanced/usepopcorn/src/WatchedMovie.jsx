import {  any } from 'prop-types'

function WatchedMovie({movie}) {
    return (
        <div>
            <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                    <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                    </p>
                    <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                    </p>
                    <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                    </p>
                </div>
            </li>
        </div>
    )
}

WatchedMovie.propTypes = {
    movie: any
}

export default WatchedMovie