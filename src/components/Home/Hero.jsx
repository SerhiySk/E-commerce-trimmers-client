import React from 'react';
import Wrapper from '../../assets/wrappers/Hero';
import { Link } from 'react-router-dom';
import hero1 from '../../assets/hero1.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jpg';

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-center">
        <div className="img-container">
          <img src={hero1} alt="something" className="img-1" />
          <img src={hero2} alt="something" className="img-2" />
          <img src={hero3} alt="something" className="img-3" />
        </div>
        <div className="overlay">
          <div className="text-container">
            <h3>Professional Trimmers - Get the Best Results with Trimman</h3>
            <p>
              Get the professional trim you deserve with premium trimmers from
              Trimman. Our trimmers guarantee precision and comfort to get the
              perfect look. Shop online with free shipping today!
            </p>
            <Link to="/products/trimmers" className="btn btn-big btn-light">
              shop now
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
