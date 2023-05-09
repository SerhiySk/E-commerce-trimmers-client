import React from 'react';
import Wrapper from '../../assets/wrappers/Product';
// import { formatPrice } from '../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { serverDomain } from '../../utils/constants';

import { formatPrice } from '../../utils/helpers';
const Product = ({ id, images, name, price }) => {
  return (
    <Wrapper>
      <div className="container" key={id}>
        <Link to={`/products/` + id}>
          <img src={serverDomain + images[0]} alt={name} />
          <div className="link">
            <FaSearch />
          </div>
        </Link>
      </div>
      <footer>
        <h3>{name}</h3>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

export default Product;
