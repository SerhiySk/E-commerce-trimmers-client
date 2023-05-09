import React from 'react';
import Wrapper from '../../assets/wrappers/Services';
import { services } from '../../utils/constants';

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="header">
          <div className="title-container">
            <h1 className="title">services</h1>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est
            perspiciatis quidem? Adipisci impedit nisi, sint vel sit nihil
            dolorum fuga atque vitae eius eos asperiores maxime quos repudiandae
            quae.
          </p>
        </div>
        <div className="services-center">
          {services.map(service => {
            const { id, icon, title, text } = service;
            return (
              <div className="service" key={id}>
                {' '}
                <span>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
