import WatchedMovie from './WatchedMovie'
import { any } from 'prop-types'

function WatchedMovieList({ watched, onDeleteWatched}) {
    return (
        <div><ul className="list">
            {watched?.map((movie) => (
                <WatchedMovie  movie={movie} key={movie.imdbId} onDeleteWatched={onDeleteWatched} />
            ))}
        </ul></div>
    )
}

WatchedMovieList.propTypes = {
    watched: any
}
export default WatchedMovieList