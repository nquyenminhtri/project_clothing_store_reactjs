const initialState = {
    dsSanPham: [],
    dsLoaiSanPham:[] // Danh sách sản phẩm ban đầu
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DSSANPHAM':
        return {
          ...state,
          dsSanPham: action.payload
        };
      case 'SET_DSLOAISANPHAM':
        return{
          ...state,
          dsLoaiSanPham: action.payload
        }
      default:
        return state;
    }
  };
  
  export default productReducer;