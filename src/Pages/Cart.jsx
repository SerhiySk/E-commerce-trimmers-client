import React, { useEffect } from 'react';

import { PageHero } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { CartContent, EmptyCart } from '../components/Cart';
import { countCartTotals } from '../features/cart/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store.cart);
  useEffect(() => {
    dispatch(countCartTotals());
  }, [cart]);
  return (
    <main className="page-100">
      <PageHero title="cart" />
      {cart.length < 1 ? <EmptyCart /> : <CartContent />}
    </main>
  );
};

export default Cart;
