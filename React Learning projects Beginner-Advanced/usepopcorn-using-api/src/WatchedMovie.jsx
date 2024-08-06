import {  any } from 'prop-types'

function WatchedMovie({movie, onDeleteWatched}) {
    return (
        <div>
            <li key={movie.imdbID}>
                <img src={movie.poster} alt={`${movie.title} poster`} />
                <h3>{movie.title}</h3>
                <div>
                    <p>
                        <span>⭐️</span>
                        <span>{movie.rating}</span>
                    </p>
                    <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                    </p>
                    <p>
                        <span>⏳</span>
                        <span>{movie.runtime} </span>
                    </p>&nbsp;
                    <button onClick={()=>onDeleteWatched(movie.imdbId)} className='btn-delete'>X</button>
                </div>
            </li>
        </div>
    )
}

WatchedMovie.propTypes = {
    movie: any
}

export default WatchedMovie