import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPayment } from '../../../redux/features/paymentMethodSlice';

function PayMethod() {
  const dispatch = useDispatch();
  const selectedPayment = useSelector((state) => state.paymentMethod.selectedPayment);
  console.log('check selected pay ment:',selectedPayment);
  const handlePaymentChange = (paymentOption) => {
    dispatch(setSelectedPayment(paymentOption));
  };
    return(
        <>
            <div id="accordion" role="tablist" className="mb-4">
                <h6 style={{textAlign:'center'}}>Payment methods</h6>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingFive">
                                        <div className="mb-0">
                                        <label>
                                        <input
                                                type="radio"
                                                name="paymentOption"
                                                value="paypal"
                                                checked={selectedPayment === 'paypal'}
                                                onChange={() => handlePaymentChange('paypal')}
                                            />
                                            <i className="fa fa-circle-o mr-3"></i>PayPal
                                        </label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card">
                                <div className="card-header" role="tab" id="headingFive">
                                        <div className="mb-0">
                                        <label>
                                        <input
                                            type="radio"
                                            name="paymentOption"
                                            value="paymentOnDelivery"
                                            checked={selectedPayment === 'paymentOnDelivery'}
                                            onChange={() => handlePaymentChange('paymentOnDelivery')}
                                            />
                                            <i className="fa fa-circle-o mr-3"></i>Payment on Delivery
                                        </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </>
    )
}
export default PayMethod;