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
              Subscribing to our newsletter is a great way to stay up-to-date
              with our latest product releases and take advantage of exclusive
              discounts. As an added bonus, new subscribers receive a 20%
              discount on their first purchase. Don't miss out - sign up today!
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
