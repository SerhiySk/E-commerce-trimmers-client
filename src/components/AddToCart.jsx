import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { addToCart } from '../features/cart/cartSlice';
import AmountButtons from './Cart/AmountButtons';
import { useDispatch } from 'react-redux';
import Wrapper from '../assets/wrappers/AddToCart';
const AddToCart = ({ product }) => {
  // add to cart
  const { id, inventory, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const increase = () => {
    setAmount(oldAmount => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > inventory) {
        tempAmount = inventory;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount(oldAmount => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <Wrapper>
      <div className="colors">
        <span>colors :</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? 'color-btn active' : 'color-btn'
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />

        <Link
          to="/cart"
          className="btn btn-filled btn-round"
          onClick={() =>
            dispatch(addToCart({ id, color: mainColor, amount, product }))
          }
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};
export default AddToCart;
