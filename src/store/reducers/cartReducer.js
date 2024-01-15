const initialState = {
    cartItems: [],
    total: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_CART':
        return {
          ...state,
          cartItems: action.payload.cartItems,
          total: action.payload.total,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;