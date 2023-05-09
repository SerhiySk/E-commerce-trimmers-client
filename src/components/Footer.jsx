import React from 'react';
import Wrapper from '../assets/wrappers/Footer';
const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <h5>
          &copy; {new Date().getFullYear()} strong&
          <span className="logo-styled">gentle</span>
        </h5>{' '}
        <h5>All rights reserved</h5>
      </footer>
    </Wrapper>
  );
};

export default Footer;
