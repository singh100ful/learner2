import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {movieSlice} from './reducer/movieReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {cartSlice} from './reducer/cartReducer';
import {sentryMiddleware} from './middleware/sentryMiddleware';

const reducers = combineReducers({
  movie: movieSlice.reducer,
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: {
    root: reducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(sentryMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
