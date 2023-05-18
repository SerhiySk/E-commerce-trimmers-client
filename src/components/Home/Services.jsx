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
            Our trimmers are designed to provide maximum precision and control,
            allowing you to get the perfect trim every time. Our trimmers come
            equipped with a variety of attachments, giving you the ability to
            adjust the length and intensity of your trim. Our trimmers also
            feature a powerful motor, giving you the power and control needed to
            get the perfect look.
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
