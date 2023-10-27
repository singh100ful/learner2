import {createAsyncThunk} from '@reduxjs/toolkit';
import {baseUrl} from '@src/constants/appConstants';
import * as Sentry from '@sentry/react-native';

export const fetchMovies = createAsyncThunk(
  'movie/get',
  async (params: MovieParams) => {
    return fetch(baseUrl + `s=${params.search}&page=${params.page}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        return data.Search;
      })
      .catch(err => {
        Sentry.captureException(err);
      });
  },
);

export const movieDetails = createAsyncThunk(
  'movie/details',
  async (params: string) => {
    return fetch(baseUrl + `i=${params}&plot=full`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(err => {
        Sentry.captureException(err);
      });
  },
);
