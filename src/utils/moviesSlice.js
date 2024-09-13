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
        }
    },
});


export const{ addNowPlayingMovies, addPopularMovies } = moviesSlice.actions; 
export default moviesSlice.reducer;