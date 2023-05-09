import React from 'react';
import Wrapper from '../../assets/wrappers/Newsletter';
const NewsLetter = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="content">
          <div>
            <h3>Join our newsletter and get 20% off</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit veritatis tenetur necessitatibus explicabo fugit
              ratione nesciunt odit blanditiis enim sit!
            </p>
          </div>
          <form className="contact-form">
            <input
              className="form-input"
              type="email"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default NewsLetter;
