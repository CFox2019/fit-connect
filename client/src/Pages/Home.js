import React from 'react';
import NavigationBar from '../Components/Home_Components/NavigationBar';
import { HeroCarousel } from '../Components/Home_Components/HeroCarousel'
import { Layout } from '../Components/Home_Components/Layout';
import { Features } from '../Components/Home_Components/Features';
import { FeaturesJoinUs } from '../Components/Home_Components/FeaturesJoinUs';
import { SecondFeaturesJoinUs } from '../Components/Home_Components/SecondFeaturesJoinUs';
import { FooterSection } from '../Components/Home_Components/Footer';
import { FooterContent } from '../Components/Home_Components/FooterContent';

export const Home = () => {
  return (
      <React.Fragment>
      {/* Navigation Bar */}
        <Layout>
          <NavigationBar />
        </Layout>

        <HeroCarousel />
        <Layout>
          <Features />
        </Layout>
        <FeaturesJoinUs />
        <SecondFeaturesJoinUs />

      {/* Footer */}
        <FooterSection>
          <Layout>
            <FooterContent />
          </Layout>
        </FooterSection>
      </React.Fragment>
  );
}

export default Home;
