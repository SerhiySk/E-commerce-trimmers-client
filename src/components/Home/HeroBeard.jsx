import React from 'react';
import Wrapper from '../../assets/wrappers/HeroBeard';
import { Link } from 'react-router-dom';
import hero1 from '../../assets/care1.jpg';
import hero2 from '../../assets/care2.jpg';
import hero3 from '../../assets/care3.jpg';

const HeroBeard = () => {
  return (
    <Wrapper>
      <div className="title-container">
        <h1 className="title">skin care</h1>
        <div className="underline"></div>
      </div>
      <div className="hero-center">
        <div className="img-container">
          <img src={hero1} alt="something" className="img-1" />
          <img src={hero2} alt="something" className="img-2" />
          <img src={hero3} alt="something" className="img-3" />
        </div>
        <div className="overlay">
          <div className="text-container">
            <h3>Professional Hair Care Products – Trimman </h3>
            <p>
              Shop professional grade hair care products from Trimman. Get the
              best hair care oils, shampoos and conditioners to keep your
              tresses looking their best.
            </p>
            <Link to="/products/skin-care" className="btn btn-big btn-light">
              shop now
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroBeard;
