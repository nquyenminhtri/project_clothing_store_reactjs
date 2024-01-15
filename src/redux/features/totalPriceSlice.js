

import { createSlice } from '@reduxjs/toolkit';

const totalPriceSlice = createSlice({
  name: 'totalPrice',
  initialState: {
    value: 0,
    totalPriceCart : 0,
  },
  reducers: {
    updateTotalPrice: (state, action) => {
      state.value = action.payload;
    },
    setTotalPriceCart: (state, action) => {
        state.totalPriceCart = action.payload;
      },
  },
});

export const { updateTotalPrice,setTotalPriceCart } = totalPriceSlice.actions;
export const selectTotalPrice = (state) => state.totalPrice.value;
export const selectTotalPriceCart = (state) => state.totalPrice.totalPriceCart;
export default totalPriceSlice.reducer;
