import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';


const rootReducer = combineReducers({
  cart: cartReducer, // Sử dụng cartReducer cho trạng thái giỏ hàng
  
});

export default rootReducer;