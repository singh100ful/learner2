import {createSlice} from '@reduxjs/toolkit';
import {fetchMovies, movieDetails} from '../services/movieService';

export const initialState: MovieState = {
  loading: {
    movie: false,
    detail: false,
  },
  error: {
    movieErr: null,
    detailErr: null,
  },
  movies: null,
  details: null,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.loading.movie = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading.movie = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action: any) => {
        state.loading.movie = false;
        state.movies = null;
        state.error.movieErr = action.error;
      })
      .addCase(movieDetails.pending, state => {
        state.loading.detail = true;
      })
      .addCase(movieDetails.fulfilled, (state, action) => {
        state.loading.detail = false;
        state.details = action.payload;
      })
      .addCase(movieDetails.rejected, (state, action: any) => {
        state.loading.detail = false;
        state.details = null;
        state.error.detailErr = action.error;
      });
  },
});
