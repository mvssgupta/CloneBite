import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const ourAppReduxStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default ourAppReduxStore;
