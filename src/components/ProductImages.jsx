import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/ProductImages';
import { serverDomain } from '../utils/constants';
const ProductImages = ({ images = [{}] }) => {
  const [main, setMain] = useState({ image: images[0], id: 0 });

  return (
    <Wrapper>
      <img src={serverDomain + main.image} className="main" alt="main image" />

      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={serverDomain + image}
              alt="sub image"
              onClick={() => setMain({ image, id: index })}
              className={`${index === main?.id ? 'active' : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
