import { useSelector } from "react-redux"
import MoviesList from "./MoviesList"

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);
  
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-56 pl-10 relative z-20">
          <MoviesList title={'Now Playing'} movies={movies?.nowPlayingMovies}/>
          <MoviesList title={'Top Rated'} movies={movies?.topRatedMovies}/>
          <MoviesList title={'Popular'} movies={movies?.popularMovies}/>
          <MoviesList title={'Upcoming Movies'} movies={movies?.upcomingMovies}/>
          <MoviesList title={'Trending'} movies={movies?.trendingMovies}/>
        </div>
        
      </div>
    )    
  );
}

export default SecondaryContainer