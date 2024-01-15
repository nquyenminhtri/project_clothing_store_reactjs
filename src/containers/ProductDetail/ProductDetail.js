// ProductDetail.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Index/Header/Header';
import Footer from '../Index/Footer/Footer';
import MenuArea from './Components/MenuArea';
import TopDiscount from '../Index/Section/Components/TopDiscount';
import ProductImages from './Components/ProductImages';
import ProductInformation from './Components/ProductInformation';
import productService from '../../services/productService';
import RelatedProducts from './Components/RelatedProducts';
function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log('product id: ',productId);
  useEffect(() => {
    if (!productId) {
      return;
    }

    setLoading(true);
    setError(null);

    productService.getDetailProductFromAPI(productId)
      .then((response) => {
        setProduct(response);
        console.log('data',response);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy thông tin sản phẩm:', error);
        setError('Lỗi khi lấy thông tin sản phẩm');
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  if (!product) {
    return null; // or any fallback UI if needed
  }

  return (
    <div>
      <div id="wrapper">
        <Header />
        <TopDiscount />
        <MenuArea />
        <section className="single_product_details_area section_padding_0_100">
          <div className="container">
            <div className="row">
              <ProductImages images={product} />
              <ProductInformation information={product} />
            </div>
          </div>
        </section>
        <RelatedProducts relatedProducts = {product.data.relatedProducts}/>
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetail;
