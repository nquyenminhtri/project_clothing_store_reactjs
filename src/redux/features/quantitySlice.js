
import { createSlice } from '@reduxjs/toolkit';

const quantitySlice = createSlice({
  name: 'quantity',
  initialState: 1,
  reducers: {
    setQuantity: (state, action) => {
      return action.payload;
    },
    decreaseQuantity: (state) => {
      return state > 1 ? state - 1 : 1;
    },
    increaseQuantity: (state) => {
      return state + 1;
    },
  },
});

export const { setQuantity, decreaseQuantity, increaseQuantity } = quantitySlice.actions;

export default quantitySlice.reducer;