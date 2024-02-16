
import { createSlice } from '@reduxjs/toolkit';

const filteredOrdersSlice = createSlice({
  name: 'filteredOrders',
  initialState: null,
  reducers: {
    setFilteredOrders: (state, action) => {
      return action.payload; 
    },
    clearFilteredOrders: () => null, 
  },
});

export const { setFilteredOrders, clearFilteredOrders } = filteredOrdersSlice.actions;
export default filteredOrdersSlice.reducer;
