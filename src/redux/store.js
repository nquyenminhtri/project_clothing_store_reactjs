// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';
import quantityReducer from './features/quantitySlice';
import sizeReducer from './features/sizeSlice';
import colorReducer from './features/colorSlice';
import promotionReducer from './features/promotionSlice';
import shippingReducer from './features/shippingSlice';
import totalPriceReducer from './features/totalPriceSlice';
import customerDataReducer from './features/customerDataSlice';
import paymentMethodReducer from './features/paymentMethodSlice';
export const store = configureStore({
  reducer: {
    product: productReducer,
    quantity: quantityReducer,
    size: sizeReducer,
    color: colorReducer,
    promotion: promotionReducer,
    shipping: shippingReducer,
    totalPrice: totalPriceReducer,
    customerData: customerDataReducer,
    paymentMethod: paymentMethodReducer,
  },
});