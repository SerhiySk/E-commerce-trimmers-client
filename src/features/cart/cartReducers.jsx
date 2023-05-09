import { current } from '@reduxjs/toolkit';
import { setCartToLocalStorage } from '../../utils/localStorage';
export const addToCartReducer = (state, { payload }) => {
  const { id, color, amount, product } = payload;
  const { cart } = current(state);
  const tempItem = cart.find(i => i.id === id + color);
  let tempCart = [];
  if (tempItem) {
    tempCart = cart.map(cartItem => {
      if (cartItem.id === id + color) {
        let newAmount = cartItem.amount + amount;
        if (newAmount > cartItem.max) {
          newAmount = cartItem.max;
        }
        return { ...cartItem, amount: newAmount };
      } else {
        return cartItem;
      }
    });
  } else {
    const newItem = {
      id: id + color,
      product: id,
      name: product.name,
      color,
      amount,
      image: product.images[0],
      price: product.price,
      max: product.stock,
      freeShipping: product.freeShipping,
    };
    tempCart = [...cart, newItem];
  }
  setCartToLocalStorage(tempCart);
  state.cart = tempCart;
};

export const removeCartItemReducer = (state, { payload }) => {
  const tempCart = current(state.cart).filter(item => item.id !== payload);
  state.cart = tempCart;
  setCartToLocalStorage(tempCart);
};

export const toggleAmountReducer = (state, { payload }) => {
  const { id, value } = payload;
  const { cart } = current(state);
  const tempCart = cart.map(item => {
    if (item.id === id) {
      if (value === 'inc') {
        let newAmount = item.amount + 1;
        if (newAmount > item.max) {
          newAmount = item.max;
        }
        return { ...item, amount: newAmount };
      }
      if (value === 'dec') {
        let newAmount = item.amount - 1;
        if (newAmount < 1) {
          newAmount = 1;
        }
        return { ...item, amount: newAmount };
      }
    }
    return item;
  });
  state.cart = tempCart;
  setCartToLocalStorage(tempCart);
};
export const clearCartReducer = state => {
  state.cart = [];
  setCartToLocalStorage([]);
};
export const countCartTotalsReducer = state => {
  const { cart } = current(state);
  const tempCart = [...cart];
  const { totalItems, totalAmount } = tempCart.reduce(
    (total, cartItem) => {
      const { amount, price } = cartItem;
      total.totalItems += amount;
      total.totalAmount += price * amount;
      return total;
    },
    { totalItems: 0, totalAmount: 0 }
  );
  const isFreeShipping = cart.some(val => val.freeShipping === true);
  state.shippingFee = isFreeShipping ? 0 : 534;
  state.totalItems = totalItems;
  state.totalAmount = totalAmount;
};
