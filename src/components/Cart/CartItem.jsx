import React from 'react';
import Wrapper from '../../assets/wrappers/CartItem';
import { formatPrice } from '../../utils/helpers';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';
import { removeCartItem, toggleAmount } from '../../features/cart/cartSlice';
import { serverDomain } from '../../utils/constants';
import { useDispatch } from 'react-redux';
const CartItem = ({ id, image, name, color, price, amount }) => {
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(toggleAmount({ id, value: 'inc' }));
  };
  const decrease = () => {
    dispatch(toggleAmount({ id, value: 'dec' }));
  };
  return (
    <Wrapper>
      <div className="title">
        <img src={serverDomain + image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            color :
            <span style={{ background: color }} />
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        className="remove-btn"
        onClick={() => dispatch(removeCartItem(id))}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

export default CartItem;
