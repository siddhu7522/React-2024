import { useEffect, useState } from "react"

const KEY = "75d7f345"
export const useMovies = (query) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {

        const fetchMovies = async () => {
            try {
                setIsLoading(true)
                //Error should be reset and should not the show the old call error when ever calling the api when query changes
                setError("")
                const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
                const data = await res.json()
                if (data.Response === "False") {
                    throw new Error("Movie not found")
                }
                setMovies(data.Search)
                setIsLoading(false)
            }
            catch (err) {
                setError(err.message)
            }
            if (!query.length) {
                setMovies([])
                setError("")
                setIsLoading(false)
            }
        }
        fetchMovies()
    }, [query])
    return {isLoading, error, movies}
}