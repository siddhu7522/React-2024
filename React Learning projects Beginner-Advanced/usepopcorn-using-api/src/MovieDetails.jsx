import React, { useEffect, useState } from 'react'
import StarRating from './StarRating'

const KEY = "75d7f345"
function MovieDetails({ selectedId, goBack, onAddMovie, watched }) {
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [userRating, setUserRating] = useState("")
    const isWatched = watched?.find((x)=>x.imdbId === selectedId)
    if(isWatched){
        console.log(isWatched)
    }
    const watchedUserRating= isWatched ?.userRating
    const handleAdd= ()=>{
        const newMovie= {
            imdbId:selectedId,
            title:movie.Title,
            year:movie.Year,
            poster:movie.Poster,
            rating:Number(movie.imdbRating),
            runtime: movie?.Runtime?.split(" ").at(0),
            userRating
        }

        onAddMovie(newMovie)
        goBack()
    }
    useEffect(() => {
        const getMovie = async () => {
            setIsLoading(true)
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`)
            const data = await res.json()
            setMovie(data)
            setIsLoading(false)
        }
        getMovie()
    }, [selectedId])

    useEffect(()=>{
        document.title = `Movie | ${movie.Title}`

        // we also need to have clean up function to set the title back to normal when we came back from movie
        return ()=>{
            document.title ="usePopCorn"
        }
    
      },[movie.Title])

      //Should go back when clicked on ESC Button. We need to add event listener
      useEffect(()=>{
        function callback(e){
            if(e.code === "Escape"){
                goBack()
            }
        }
        document.addEventListener("keydown", callback)
        //clean up for removing event listener
        return ()=>{
            document.removeEventListener("keydown", callback)
        }
      },[goBack])
    return (
        <div className='details'>
            {isLoading ? (
                <p>Loading ....</p>
            ) : (
                <>
                    <header>
                        <button className='btn-back' onClick={goBack}>&larr;</button>
                        <img src={movie.Poster} />
                        <div className='details-overview'>
                            <h2>{movie.Title}</h2>
                            <p>{movie.Released} &bull; {movie.Runtime}</p>
                            <p>{movie.Genre}</p>
                            <p>
                                <span>⭐</span>
                                {movie.imdbRating} IMDb rating
                            </p>
                        </div>
                    </header>
                    <section>
                        <div className='rating'>
                            {!isWatched ? <StarRating onSetRating ={setUserRating} maxRating={10} size={24} /> : <p>You already rated with {watchedUserRating}</p>}
                            
                        </div>
                        <p>
                            <em>{movie.Plot}</em>
                            <p>Starring {movie.Actors}</p>
                            <p>Directed by {movie.Director}</p>
                        </p>
                    </section>
                    {userRating >0 && <button onClick={handleAdd} className='btn-add'>+ Add to watch list</button>}
                </>
            )}
        </div>
    )
}

export default MovieDetails