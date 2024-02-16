import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id:'',
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
    setId: (state, action) => {
      state.id = action.payload;
    },
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
  setId,
  setName,
  setGender,
  setAddress,
  setPhone,
  setEmail,
} = customerDataSlice.actions;
export const selectCustomerData = (state) => state.customerData;
export default customerDataSlice.reducer;