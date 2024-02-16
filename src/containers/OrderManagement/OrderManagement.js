import Header from "../Index/Header/Header";
import Footer from "../Index/Footer/Footer";
import OrderSideBar from "./Components/OrderSideBar";
import OrderDetail from "./Components/OrderDetail";
function OrderManagement(){
    return(
        <>
        <Header/>
        <div className="container">
            <OrderSideBar/>
        </div>
        <div className="container">
            <OrderDetail/>
        </div>
        <Footer/>
        </>
    )
}
export default OrderManagement;

// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import Modal from 'react-modal';
// import orderService from '../../../services/orderService';
// import ProductReview from '../ProductReview';

// function OrderDetail() {
//   const filteredOrders = useSelector((state) => state.filteredOrders);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
//   const [selectedOrderId, setSelectedOrderId] = useState(null);
//   const [productAndCustomerInfo, setProductAndCustomerInfo] = useState(null);
//   console.log('cehc :',productAndCustomerInfo);
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setIsRatingModalOpen(false);
//   };

//   const closeRatingModal = () => {
//     setIsRatingModalOpen(false);
//   };

//   const openRatingModal = (orderId, customerId, productId) => {
//     setSelectedOrderId(orderId);
//     setProductAndCustomerInfo({ customerId, productId }); // Chuyển thông tin vào state
//     setIsRatingModalOpen(true);
//   };

//   const handleReceivedClick = async (orderId) => {
//     try {
//       const res = await orderService.handleReceivedOrderFromAPI(orderId);
//       console.log('check res:', res);
//       alert(res);
//       if (res.success) {
//         // closeModal(); // Không cần gọi closeModal ở đây nếu không muốn đóng modal chính
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleRatingClick = (customerId, productId) => {
//     // closeModal(); // Nếu không muốn đóng modal chính
//     openRatingModal(selectedOrderId, customerId, productId);
//   };

//   useEffect(() => {
//     console.log('After closing modal:', isRatingModalOpen);
//   }, [isRatingModalOpen]);
//     return (
//       <>
//       <Modal
//         isOpen={isRatingModalOpen}
//         onRequestClose={closeRatingModal}
//         contentLabel="Rating Modal"
//         style={{
//           overlay: {
//             zIndex: 1001,
//           },
          
//         }}
//       >
//         {selectedOrderId && (
//           <ProductReview
//             orderId={selectedOrderId}
//             closeModal={closeRatingModal}
//             productAndCustomerInfo={productAndCustomerInfo}
//           />
//         )}
//       </Modal>
//         <div className="row">
//           <div className="col-12">
//             <div className="cart-table clearfix">
//               <table className="table table-responsive">
//                 <thead>
//                   <tr className="navbar">
//                     <th style={{borderRight:'1px solid red'}}>Number</th>
//                     <th style={{borderRight:'1px solid red'}}>Product</th>
//                     <th>Order date</th>
//                     <th>Shipping method</th>
//                     <th>Payment method</th>
//                     <th>Total</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredOrders &&
//                     filteredOrders.map((item0, index) => {
//                       return (
//                         <tr key={index}>
//                           <td className="cart_product_img d-flex align-items-center">
//                             <h6>{item0.id}</h6>
//                           </td>
//                           <td>
//                             <table style={{borderRight:'1px solid red'}} className="table table-responsive">
//                                 <thead>
//                                   <tr className="navbar">
//                                     <th>Number</th>
//                                     <th>Name</th>
//                                     <th>Size</th>
//                                     <th>Color</th>
//                                     <th>Quantity</th>
//                                     <th>Total</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   {item0.sale_invoice_sale_invoice_detail &&
//                                     item0.sale_invoice_sale_invoice_detail.map((item, index) => {
//                                       return (
                                        
//                                         <tr key={index}>
                                          
//                                           <td className="cart_product_img d-flex align-items-center">
//                                             <h6>{item.id}</h6>
//                                           </td>
//                                           <td className="price"><span>{item.sale_invoice_detail_product.name}</span></td>
//                                           <td className="price"><span>{item.sale_invoice_detail_size.name}</span></td>
//                                           <td className="price"><span>{item.sale_invoice_detail_color.name}</span></td>
//                                           <td className="price"><span>{item.quantity}</span></td>
//                                           <td className="price"><span>{item.price_total}</span></td>
//                                           {item0.status === 'successed' && (
//                                             <>
//                                               <td>
//                                               <button onClick={() => handleRatingClick(item0.customer_id,item.sale_invoice_detail_product.id)}>Rating</button>
//                                               </td>
//                                             </>
//                                           )}
//                                         </tr>
//                                       );
//                                     })}
//                                 </tbody>
//                               </table>
//                           </td>
//                           <td className="price"><span>{item0.export_date}</span></td>
//                           <td className="price"><span>{item0.sale_invoice_shipping.name}</span></td>
//                           <td className="price"><span>{item0.payment_method}</span></td>
//                           <td className="price"><span>{item0.total_amount}</span></td>
//                           {item0.status === 'delivering' && (
//                             <>
//                               <td>
//                                 <button onClick={() => handleReceivedClick(item0.id)}>received</button>
//                               </td>
//                             </>
//                           )}
                          
//                         </tr>
//                       );
//                     })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
  
//   export default OrderDetail;

// import React, { useState } from 'react';
// import ratingService from '../../services/ratingService';

// const ProductReview = ({  closeModal, productAndCustomerInfo }) => {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
// console.log('cus:',productAndCustomerInfo);
//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleSubmit = async () => {
//     setIsSubmitting(true);
//     try {
//       await ratingService.handleSendingCustomerReviewsToAPI(
//         productAndCustomerInfo.customerId,
//         productAndCustomerInfo.productId,
//         rating,
//         comment
//       );
  
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       setSubmitSuccess(true);
//       // Close the modal after successful submission
//       closeModal();
//     } catch (error) {
//       console.error('Error submitting review:', error);
//       setSubmitSuccess(false);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Đánh giá sản phẩm</h2>
//       <fieldset disabled={isSubmitting}>
//         <legend>Đánh giá:</legend>
//         <div>
//           {[1, 2, 3, 4, 5].map((star) => (
//             <span
//               key={star}
//               onClick={() => handleRatingChange(star)}
//               style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
//             >
//               &#9733;
//             </span>
//           ))}
//         </div>
//       </fieldset>

//       <div>
//         <label>Bình luận:</label>
//         <textarea rows="4" cols="50" value={comment} onChange={handleCommentChange} />
//       </div>

//       <button onClick={handleSubmit} disabled={isSubmitting}>
//         {isSubmitting ? 'Đang gửi...' : 'Gửi đánh giá'}
//       </button>

//       {submitSuccess && <p>Đánh giá đã được gửi thành công!</p>}
//     </div>
//   );
// };

// export default ProductReview;