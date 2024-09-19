import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";

const useTrendingMovies = ()=>{
    const dispatch = useDispatch();

    const getTrendingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);

        dispatch(addTrendingMovies(json.results));
    }

    //call getNowPlayingMovies method in useEffect

    useEffect(()=>{
        getTrendingMovies();
    },[])
};

export default useTrendingMovies;