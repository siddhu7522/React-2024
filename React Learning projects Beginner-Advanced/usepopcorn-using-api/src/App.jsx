import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MyMain from "./MyMain";
import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";
import Box from "./Box";
import MovieList from "./MovieList";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import MovieDetails from "./MovieDetails";
import { useMovies } from "./useMovies";


export default function App() {
  const [query, setQuery] = useState("")
  const [watched, setWatched] = useState(() => {
    const watchedMovies = JSON.parse(localStorage.getItem("watched"))
    if (watchedMovies.length > 0) {
      return watchedMovies
    }else{
      return []
    }
  });
  const [selectedId, setSelectedId] = useState(null)

  const { isLoading, movies, error } = useMovies(query)
  const selectMovie = (id) => {
    //if the user clicking on already selected id it will set to null. Else if it was new those new details are displayed 
    setSelectedId((prevId) => id === prevId ? null : id)
  }
  const goBack = () => {
    setSelectedId(null)
  }
  const handleAddMovie = (movie) => {
    setWatched((prevWatched) => [...prevWatched, movie])
  }
  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((x) => x.imdbId !== id))
  }

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched))
  }, [watched])
  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <MyMain>
        <Box>
          {isLoading && !error && <Loader />}
          {!isLoading && !error && <MovieList selectMovie={selectMovie} movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? <MovieDetails watched={watched} onAddMovie={handleAddMovie} selectedId={selectedId} goBack={goBack} /> : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} onDeleteWatched={handleDeleteWatched} />
            </>
          )}
        </Box>
      </MyMain>
    </>
  );
}
