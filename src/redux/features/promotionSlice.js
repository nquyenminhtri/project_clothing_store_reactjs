import { createSlice } from '@reduxjs/toolkit';

const promotionSlice = createSlice({
  name: 'promotion',
  initialState: {
    code: '',
    discount: 0,
    data: null, 
  },
  reducers: {
    setPromotionCode: (state, action) => {
      state.code = action.payload;
    },
    setPromotionData: (state, action) => {
      state.data = action.payload;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
  },
});

export const { setPromotionCode, setPromotionData,setDiscount } = promotionSlice.actions;
export const selectPromotionCode = (state) => state.promotion.code;
export const selectPromotionData = (state) => state.promotion.data;
export const selectPromotionDiscount = (state) => state.promotion.discount;
export default promotionSlice.reducer;