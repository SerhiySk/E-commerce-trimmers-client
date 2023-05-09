import { useEffect } from 'react';
import { PageHero, StripeCheckout } from '../components';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../features/orders/orderSlice';
const Checkout = () => {
  const { cart } = useSelector(store => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createOrder());
    // eslint-disable-next-line
  }, []);
  return (
    <Wrapper className="page-100">
      <PageHero title="checkout" />
      <div className="form-card">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </Wrapper>
  );
};
export default Checkout;

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: 10vh 1fr;
  .form-card {
    display: grid;
    place-items: center;
  }
  .empty {
    text-align: center;
  }
`;
