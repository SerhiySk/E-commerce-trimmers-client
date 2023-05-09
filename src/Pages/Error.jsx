import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
export default function Error() {
  return (
    <Wrapper className="page-100">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn btn-big btn-dark">
          back home
        </Link>
      </div>
    </Wrapper>
  );
}
