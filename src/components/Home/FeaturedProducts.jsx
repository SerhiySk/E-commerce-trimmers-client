import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Error from '../Error';
import Loading from '../Loading';
import { Product } from '../Products';
import Wrapper from '../../assets/wrappers/FeaturedProducts';
const FeaturedProducts = () => {
  const { featuredProducts, isProductsLoading } = useSelector(
    store => store.products
  );

  return (
    <Wrapper>
      <div className="title-container">
        {' '}
        <h1 className="title">featured products</h1>
        <div className="underline"></div>
      </div>

      {isProductsLoading ? (
        <Loading />
      ) : (
        <div className="section-center featured">
          {featuredProducts.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default FeaturedProducts;
