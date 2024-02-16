import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    setOrders: (state, action) => {
      return action.payload; 
    },
    clearOrders: () => [],
  },
});

export const { setOrders, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;