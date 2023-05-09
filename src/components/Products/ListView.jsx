import React from 'react';
import Wrapper from '../../assets/wrappers/ListView';
import { formatPrice } from '../../utils/helpers';
import { serverDomain } from '../../utils/constants';
import { Link } from 'react-router-dom';
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map(product => {
        const { description, id, images, name, price } = product;
        return (
          <article key={id}>
            <Link to={`/products/${id}`}>
              <img src={serverDomain + images[0]} alt={name} />
            </Link>
            <div>
              <h4>{name}</h4>
              <h5>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn btn-filled">
                details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

export default ListView;
