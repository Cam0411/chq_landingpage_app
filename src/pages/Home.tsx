import React from 'react';
import Hero from '../components/Hero';
import AgencyIntro from '../components/AgencyIntro';
import ServicesGrid from '../components/ServicesGrid';
import Contact from '../components/Contact';
import CreativeSlider from '../components/CreativeSlider';
import { Page } from '../types';

interface HomeProps {
  setActivePage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  return (
    <>
      <Hero id="home" />
      <AgencyIntro />
      
      <ServicesGrid onViewDetails={setActivePage} />

      <CreativeSlider />

      <Contact id="contact" />
    </>
  );
};

export default Home;
