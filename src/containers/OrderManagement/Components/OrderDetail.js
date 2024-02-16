import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import orderService from '../../../services/orderService';
import ProductReview from '../ProductReview';

function OrderDetail() {
  const filteredOrders = useSelector((state) => state.filteredOrders);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [productAndCustomerInfo, setProductAndCustomerInfo] = useState(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setIsRatingModalOpen(false);
  };
  const openRatingModal = (customerId, productId) => {
   
    setProductAndCustomerInfo({ customerId, productId });
    setIsRatingModalOpen(true);
  };
  const handleReceivedClick = async (orderId) => {
    try {
      const res = await orderService.handleReceivedOrderFromAPI(orderId);
      console.log('check res:', res);
      alert(res);
      if (res.success) {
        closeModal();
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRatingClick = (customerId,productId) => {
    console.log('check cs id:',customerId);
    console.log('check pr id:',productId);
    openRatingModal(customerId,productId)
    closeModal();
    setIsRatingModalOpen(true);
    setSelectedOrderId(productId);
  };

  useEffect(() => {
    console.log('After closing modal:', isModalOpen);
  }, [isModalOpen]);
    return (
      <>
      <Modal
        isOpen={isRatingModalOpen}
        onRequestClose={() => setIsRatingModalOpen(false)}
        contentLabel="Rating Modal"
        style={{
          overlay: {
            zIndex: 1001,
          },
          content: {
           
          },
        }}
      >
        {selectedOrderId && (
          <ProductReview
            orderId={selectedOrderId}
            closeModal={() => setIsRatingModalOpen(false)}
            productAndCustomerInfo={productAndCustomerInfo} // Pass the info here
          />
        )}
      </Modal>
        <div className="row">
          <div className="col-12">
            <div className="cart-table clearfix">
              <table className="table table-responsive">
                <thead>
                  <tr className="navbar">
                    <th style={{borderRight:'1px solid red'}}>Number</th>
                    <th style={{borderRight:'1px solid red'}}>Product</th>
                    <th>Order date</th>
                    <th>Shipping method</th>
                    <th>Payment method</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders &&
                    filteredOrders.map((item0, index) => {
                      return (
                        <tr key={index}>
                          <td className="cart_product_img d-flex align-items-center">
                            <h6>{item0.id}</h6>
                          </td>
                          <td>
                            <table style={{borderRight:'1px solid red'}} className="table table-responsive">
                                <thead>
                                  <tr className="navbar">
                                    <th>Number</th>
                                    <th>Name</th>
                                    <th>Size</th>
                                    <th>Color</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {item0.sale_invoice_sale_invoice_detail &&
                                    item0.sale_invoice_sale_invoice_detail.map((item, index) => {
                                      return (
                                        
                                        <tr key={index}>
                                          
                                          <td className="cart_product_img d-flex align-items-center">
                                            <h6>{item.id}</h6>
                                          </td>
                                          <td className="price"><span>{item.sale_invoice_detail_product.name}</span></td>
                                          <td className="price"><span>{item.sale_invoice_detail_size.name}</span></td>
                                          <td className="price"><span>{item.sale_invoice_detail_color.name}</span></td>
                                          <td className="price"><span>{item.quantity}</span></td>
                                          <td className="price"><span>{item.price_total}</span></td>
                                          {item0.status === 'successed' && !item.hasReviewed && (
                                            <>
                                              <td>
                                              <button onClick={() => handleRatingClick(item0.customer_id,item.sale_invoice_detail_product.id)}>Rating</button>
                                              </td>
                                            </>
                                          )}
                                        </tr>
                                      );
                                    })}
                                </tbody>
                              </table>
                          </td>
                          <td className="price"><span>{item0.export_date}</span></td>
                          <td className="price"><span>{item0.sale_invoice_shipping.name}</span></td>
                          <td className="price"><span>{item0.payment_method}</span></td>
                          <td className="price"><span>{item0.total_amount}</span></td>
                          {item0.status === 'delivering' && (
                            <>
                              <td>
                                <button onClick={() => handleReceivedClick(item0.id)}>received</button>
                              </td>
                            </>
                          )}
                          
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default OrderDetail;