import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    id: null,
    selectedColor: null,
  },
  reducers: {
    setColor: (state, action) => {
      const { id, selectedColor } = action.payload;
      state.id = id;
      state.selectedColor = selectedColor;
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;