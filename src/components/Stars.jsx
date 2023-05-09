import React from 'react';
import Wrapper from '../assets/wrappers/Stars';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    if (stars < index + 0.5) return <BsStar key={index + 1} />;

    if (stars < index + 1) return <BsStarHalf key={index + 1} />;
    if (stars >= index + 1) return <BsStarFill key={index + 1} />;
  });

  return (
    <Wrapper>
      <span>{tempStars.map(star => star)}</span>
      <p>
        {reviews > 0 ? `(${reviews} customer reviews)` : '(No reviews yet)'}
      </p>
    </Wrapper>
  );
};

export default Stars;
