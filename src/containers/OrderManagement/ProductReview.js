import React, { useState } from 'react';
import ratingService from '../../services/ratingService';

const ProductReview = ({  closeModal, productAndCustomerInfo }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
console.log('cus:',productAndCustomerInfo);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await ratingService.handleSendingCustomerReviewsToAPI(
        productAndCustomerInfo.customerId,
        productAndCustomerInfo.productId,
        rating,
        comment
      );
  
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      // Close the modal after successful submission
      closeModal();
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Đánh giá sản phẩm</h2>
      <fieldset disabled={isSubmitting}>
        <legend>Đánh giá:</legend>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRatingChange(star)}
              style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
            >
              &#9733;
            </span>
          ))}
        </div>
      </fieldset>

      <div>
        <label>Bình luận:</label>
        <textarea rows="4" cols="50" value={comment} onChange={handleCommentChange} />
      </div>

      <button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Đang gửi...' : 'Gửi đánh giá'}
      </button>

      {submitSuccess && <p>Đánh giá đã được gửi thành công!</p>}
    </div>
  );
};

export default ProductReview;