import React from 'react';
import Wrapper from '../assets/wrappers/PageHero';
import { Link } from 'react-router-dom';
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">home</Link>
          {product && <Link to={`/products`}>/ products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

export default PageHero;
