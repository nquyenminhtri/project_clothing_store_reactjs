// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
    fetchProductDetails: (state, action) => {
      // Logic để xử lý việc lấy chi tiết sản phẩm
      return action.payload; // Hoặc thực hiện thay đổi state phù hợp
    },
  },
});

export const { setProducts, fetchProductDetails } = productSlice.actions;

export const selectProducts = (state) => state.product;

export default productSlice.reducer;