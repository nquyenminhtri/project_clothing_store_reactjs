import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTotalPrice, selectTotalPrice } from '../../../redux/features/totalPriceSlice';
import './CartAreaStart.scss';
import ButtonCart from './ButtonCart';
function CartAreaStart(){
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  console.log('total price: ',totalPrice);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  console.log('cart',cart);
  useEffect(() => {
    const newTotalPrice = cart.reduce((total, item) => {
      return total + item.quantity * item.product.price;
    }, 0);
    dispatch(updateTotalPrice(newTotalPrice));
  }, [cart, dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
    const handleQuantityChange = (index, newQuantity) => {
      newQuantity = Math.max(1, newQuantity);
      const updatedCart = [...cart];
      const { size, color, product } = updatedCart[index];
      const matchingIndex = updatedCart.findIndex(
        (item) => item.size.selectedSize === size.selectedSize && item.color.selectedColor === color.selectedColor && item.product.id === product.id
      );
  
      if (matchingIndex !== -1) {
        // Nếu sản phẩm với size, color và id sản phẩm đúng đã tồn tại trong giỏ hàng
        updatedCart[matchingIndex] = {
          ...updatedCart[matchingIndex],
          quantity: newQuantity,
        };
      } else {
        // Nếu sản phẩm chưa tồn tại, cập nhật số lượng cho sản phẩm hiện tại
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: newQuantity,
        };
      }
  
      setCart(updatedCart);
    };
    const handleRemoveProduct = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1); //delete product in cart
        setCart(updatedCart);
      };
    return(
        
        <div className="row">
        <div className="col-12">
            <div className="cart-table clearfix">
                <table className="table table-responsive">
                    <thead>
                        <tr className="navbar">
                            <th>Product</th>
                            <th>Size</th>
                            <th>Color</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart && cart.map((item,index)=>{
                            return(
                                <tr key={index}>
                                <td className="cart_product_img d-flex align-items-center">
                                    <a href="#"><img src={item.product.image_path} alt="Product"/></a>
                                    <h6>{item.product.name}</h6>
                                </td>
                                <td className="price"><span>{item.size}</span></td>
                                <td className="price"><span>{item.color}</span></td>
                                <td className="price"><span>{item.product.description}</span></td>
                                <td className="qty">
                    <div className="quantity">
                      <span
                        className="qty-minus"
                        onClick={() =>
                          handleQuantityChange(index, item.quantity - 1)
                        }
                      >
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </span>
                      <input
                        type="number"
                        className="qty-text"
                        id="qty"
                        step="1"
                        min="1"
                        max="99"
                        name="quantity"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            index,
                            parseInt(e.target.value, 10)
                          )
                        }
                      />
                      <span
                        className="qty-plus"
                        onClick={() =>
                          handleQuantityChange(index, item.quantity + 1)
                        }
                      >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </span>
                    </div>
                  </td>
                                <td className="price"><span>{item.product.price}</span></td>
                                <td className="price"><span
                                    className="remove-product"
                                    onClick={() => handleRemoveProduct(index)}
                                >
                                    Delete
                                </span></td>
                                <td className="total_price">
                                  <span>{(item.quantity * item.product.price).toLocaleString('vi-VN')} VNĐ</span>
                                </td>
                            </tr>
                            )
                        })   
                        }
                    </tbody>
                </table>
            </div>
            <ButtonCart/>
        </div>
    </div>
    )
}
export default CartAreaStart;