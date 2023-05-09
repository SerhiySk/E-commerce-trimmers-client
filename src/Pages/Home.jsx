import React from 'react';
import {
  FeaturedProducts,
  Hero,
  HeroBeard,
  Services,
  NewsLetter,
} from '../components/Home';
const Home = () => {
  return (
    <>
      <Hero />
      <HeroBeard />
      <FeaturedProducts />
      <Services />
      <NewsLetter />
    </>
  );
};

export default Home;
