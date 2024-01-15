import React, { useState } from 'react';

const QuantityInput = ({ quantity, decreaseQuantity, increaseQuantity }) => {
    return (
        <div className="quantity">
            <span className="qty-minus" onClick={decreaseQuantity}>
                <i className="fa fa-minus" aria-hidden="true"></i>
            </span>
            <input
                type="number"
                className="qty-text"
                id="qty"
                step="1"
                min="1"
                max="12"
                name="quantity"
                value={quantity}
            />
            <span className="qty-plus" onClick={increaseQuantity}>
                <i className="fa fa-plus" aria-hidden="true"></i>
            </span>
        </div>
    );
};
export default QuantityInput;