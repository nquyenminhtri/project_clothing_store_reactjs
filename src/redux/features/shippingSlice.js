import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipping: [],
  shippingPrice :0, 
  selectedShipping: null, 
};

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    setShipping: (state, action) => {
      state.shipping = action.payload;
    },
    setShippingPrice: (state,action)=>{
        state.shippingPrice = action.payload;
    },
    setSelectedShipping: (state, action) => {
      state.selectedShipping = action.payload;
    },
  },
});

export const { setShipping, setSelectedShipping,setShippingPrice } = shippingSlice.actions;
export const selectedShipping = (state) => state.shipping.selectedShipping;
export const selectShippingPrice = (state) => state.shipping.shippingPrice;
export default shippingSlice.reducer;