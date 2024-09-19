import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState:{
        nowPlayingMovies : null,
        popularMovies : null
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) =>{
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addTrendingMovies: (state,action) => {
            state.trendingMovies = action.payload;
        }
    },
});


export const{ addNowPlayingMovies, addPopularMovies, addUpcomingMovies, addTopRatedMovies, addTrendingMovies } = moviesSlice.actions; 
export default moviesSlice.reducer;