import React from 'react';
import './checkoutProduct.scss';

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span
                className="checkoutProduct__star"
                role="img"
                aria-label="star"
              >
                ⭐️
              </span>
            ))}
        </div>
        <button className="checkoutProduct__button">Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
