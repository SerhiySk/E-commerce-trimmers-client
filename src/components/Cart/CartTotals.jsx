import React from 'react';
import Wrapper from '../../assets/wrappers/CartTotals';
import { formatPrice } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CartTotals = () => {
  const { totalAmount, shippingFee } = useSelector(store => store.cart);
  const { user } = useSelector(store => store.user);

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal :<span>{formatPrice(totalAmount)}</span>
          </h5>
          <p>
            shipping fee :<span>{formatPrice(shippingFee)}</span>
          </p>
          <hr />
          <h4>
            order total :<span>{formatPrice(totalAmount + shippingFee)}</span>
          </h4>
        </article>
        {user ? (
          <Link to="/checkout" className="btn btn-filled">
            proceed to checkout
          </Link>
        ) : (
          <Link to={'/register'} className="btn btn-filled">
            login
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

export default CartTotals;
