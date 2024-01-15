import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  gender: 'male',
  address: '',
  phone: '',
  email: '',
};

const customerDataSlice = createSlice({
  name: 'customerData',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {
  setName,
  setGender,
  setAddress,
  setPhone,
  setEmail,
} = customerDataSlice.actions;
export const selectCustomerData = (state) => state.customerData;
export default customerDataSlice.reducer;