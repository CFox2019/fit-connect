import React from 'react';
import NavigationBar from '../Components/Home_Components/NavigationBar';
import { ConnectPeopleHero } from '../Components/Home_Components/ConnectPeopleHero';
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

        <ConnectPeopleHero />
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
