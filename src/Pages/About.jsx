import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/care1.jpg';
import Wrapper from '../assets/wrappers/AboutPage';
const About = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            &nbsp;&nbsp;As one of the leading suppliers of trimmers and hair
            care oils in the market, Trimman has established a reputation for
            being trusted, professional and reliable. For over 10 years we have
            been providing high-quality products to our customers, earning their
            trust along the way. Our team of experts are always available to
            provide helpful advice on which product is right for you and will
            continue to strive to maintain our commitment to excellence.
            <br />
            <br />
            &nbsp;&nbsp; With Trimman, you know that you're getting the best
            quality product for your money. Shop with us today and experience
            the difference. Plus, enjoy our fast shipping services to get your
            items delivered quickly and safely. Your satisfaction is guaranteed
            with Trimman. Shop now and see why we are the trusted source for
            trimmers and hair care oil!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default About;
