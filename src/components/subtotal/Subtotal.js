import React from 'react';
import './subtotal.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';

function Subtotal() {
  const [{ basket }] = useStateValue();
  let totalPrice = 0;
  if (basket.length !== 0) {
    totalPrice = basket.reduce((acc, value) => {
      return acc + value.price;
    }, 0);
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input className="subtotal__checkbox" type="checkbox" /> This
              order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button className="subtotal__button">Proced to Checkout</button>
    </div>
  );
}

export default Subtotal;
