import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPayment: null,
};

const paymentMethodSlice = createSlice({
  name: 'paymentMethod',
  initialState,
  reducers: {
    setSelectedPayment: (state, action) => {
      state.selectedPayment = action.payload;
    },
  },
});

export const { setSelectedPayment } = paymentMethodSlice.actions;
export default paymentMethodSlice.reducer;