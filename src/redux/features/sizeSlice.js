
import { createSlice } from '@reduxjs/toolkit';

const sizeSlice = createSlice({
  name: 'size',
  initialState: {
    id: null,
    selectedSize: null,
    
  },
  reducers: {
    setSize: (state, action) => {
      const { id, selectedSize } = action.payload;
      state.id = id;
      state.selectedSize = selectedSize;
    },
  },
});

export const { setSize } = sizeSlice.actions;
export default sizeSlice.reducer;
