import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { WhyUs } from '../components/WhyUs';
import { Products } from '../components/Products';
import { Logistics } from '../components/Logistics';
import { Sourcing } from '../components/Sourcing';
import { ContactSection } from '../components/LeadGenForm';

export const Home: React.FC = () => {
  const { hash } = useLocation();

  // Handle scroll to anchor when landing on home page with a hash
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <TrustBar />
      <WhyUs />
      <Products />
      <Logistics />
      <Sourcing />
      <ContactSection />
    </>
  );
};