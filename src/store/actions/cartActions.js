export const updateCart = (cartItems, total) => ({
    type: 'UPDATE_CART',
    payload: { cartItems, total },
  });