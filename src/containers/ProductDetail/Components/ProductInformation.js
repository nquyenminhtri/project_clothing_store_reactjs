import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuantityInput from './QuantityInput';
import { setQuantity, decreaseQuantity, increaseQuantity } from '../../../redux/features/quantitySlice';
import { setSize } from '../../../redux/features/sizeSlice';
import { setColor } from '../../../redux/features/colorSlice';
function ProducInformation({ information }) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity);
  const selectedSize  = useSelector((state)=>state.size.selectedSize );
  const selectedSizeId  = useSelector((state)=>state.size.id );
  const selectedColor = useSelector((state) => state.color.selectedColor);
  const selectedColorId = useSelector((state) => state.color.id);

  console.log('Size :' ,selectedSize);
  console.log('Size id:' ,selectedSizeId);
  console.log('Color :' ,selectedColor);
  console.log('Color id :' ,selectedColorId);
  const handleSizeClick = (size) => {
    dispatch(setSize({id: size.id,selectedSize:size.name}));
  };
  const handleColorClick =(color) =>{
    dispatch(setColor({ id: color.id, selectedColor: color.name }));
  }
  const handleDecrease = () => {
    dispatch(decreaseQuantity());
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity());
  };
  const saveToLocalStorage = () => {
    const productData = {
      product: information.data.product,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor,
      size_id:selectedSizeId,
      color_id:selectedColorId
    //   material:
      // Thêm các thông tin khác của sản phẩm cần lưu vào cart
    };
  
    // Lấy danh sách sản phẩm từ localStorage (nếu có)
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = existingCart.find((item) =>
        item.product.id === productData.product.id &&
        item.size.selectedSize === productData.size.selectedSize &&
        item.color.selectedColor === productData.color.selectedColor
    );
    if (existingProduct) {
      // Nếu sản phẩm đã tồn tại, tăng số lượng
      existingProduct.quantity += quantity;
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm mới vào danh sách
      existingCart.push(productData);
    }
  
    // Lưu danh sách sản phẩm vào localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
  };
  const handleAddToCart = () => {
    if (selectedSize.selectedSize === null || selectedColor.selectedColor === null) {
      alert("Vui lòng chọn kích thước và màu trước khi thêm vào giỏ hàng.");
      return;
    }
  
    // Kiểm tra xem sản phẩm với kích thước và màu đã chọn có tồn tại hay không
    const isProductExist = information.data.productDetail.some((productDetail) => {
      return (
        productDetail.size_id === selectedSizeId &&
        productDetail.color_id === selectedColorId &&
        productDetail.quantity >= quantity
      );
    });
  
    if (isProductExist) {
      saveToLocalStorage();
      window.location.href = '/cart';
    } else {
      alert("Sản phẩm không có sẵn với kích thước và màu đã chọn, hoặc không đủ số lượng.");
    }
  };
    return(
        <div className="col-12 col-md-6">
            <div className="single_product_desc">

                <h4 className="title"><a href="#">{information.data.product.name}</a></h4>

                <h4 className="price">{information.data.product.price}</h4>
                {
                    information.data.checkProductExist 
                    ? <p className="available">Available: <span className="text-muted">In Stock</span></p>
                    : <p className="available">Available: <span className="text-muted">Sold Out</span></p>
                }
                <div className="single_product_ratings mb-15">
                    {
                        Array.from({ length: information.data.averageRating }, (_, index) => (
                            <i key={index} className="fa fa-star" aria-hidden="true"></i>
                        ))
                    }
                </div>
                
                <div className="widget size mb-50">
                    <h6 className="widget-title">Size</h6>
                    <div className="widget-desc">
                        <ul>
                            {information.data.sizes.map((size, index) => (
                                <li style={{marginLeft:'5px'}} key={index} onClick={() => handleSizeClick(size)}
                                className={size === selectedSize ? 'selected' : ''}><a>{size.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="widget size mb-50">
    <h6 className="widget-title">Color</h6>
    <div className="widget-desc">
        <ul>
            {information.data.colors.map((color, index) => (
                <li
                    style={{
                        marginLeft: '5px',
                        backgroundColor: color.color_code, // Thêm màu nền từ dữ liệu màu
                        color: 'white' // Tùy chỉnh màu chữ tùy thuộc vào màu nền để đảm bảo độ tương phản
                    }}
                    key={index}
                    onClick={() => handleColorClick(color)}
                    className={color === selectedColor ? 'selected' : ''}
                >
                    <a>{color.name}</a>
                </li>
            ))}
        </ul>
    </div>
</div>

            
                <form className="cart clearfix mb-50 d-flex" method="post">
                <QuantityInput
                quantity={quantity}
                decreaseQuantity={handleDecrease}
                increaseQuantity={handleIncrease}
            />
                    <button
                    type="button"
                    name="addtocart"
                    value="5"
                    className="btn cart-submit d-block"
                    onClick={handleAddToCart}
                    >
                    Add to cart
                    </button>
                </form>
                <div id="accordion" role="tablist">
                    <div className="card">
                        <div className="card-header" role="tab" id="headingOne">
                            <h6 className="mb-0">
                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Information</a>
                            </h6>
                        </div>
                        <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <p>{information.data.product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    </div>
    )
}
export default ProducInformation;