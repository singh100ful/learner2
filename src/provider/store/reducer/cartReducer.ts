import {createSlice} from '@reduxjs/toolkit';

const initialState: CartState = {
  loading: {
    cart: false,
  },
  error: {
    cartErr: null,
  },
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const {setCart} = cartSlice.actions;
