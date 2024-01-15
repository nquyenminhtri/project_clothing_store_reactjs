import React, { useState, useEffect } from 'react';
import Header from './Index/Header/Header';
import Section from './Index/Section/Section';
import Main from './Index/Main/Main';
import Footer from './Index/Footer/Footer';
import productService from '../services/productService';

import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/features/productSlice';
function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    productService.getAllProductFromAPI().then((response) => {
      console.log('Check data response:', response.data);
      if (response.data && response.data.length > 0) {
        dispatch(setProducts(response.data));
      }
    }).catch((error) => {
      console.error('Lỗi khi lấy thông tin sản phẩm:', error);
    });
  }, [dispatch]);
    return (
        <>
            <div id="wrapper">
                <Header />
                <Section />
                <Main/>
                <Footer />
            </div>
        </>
    );
}

export default Index;
