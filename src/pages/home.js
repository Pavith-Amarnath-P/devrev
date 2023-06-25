import React from 'react';
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
} from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';
import BookCards from '../components/bookcards';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
      <NavbarHead />
      <PageContainer>
        <Banner />
        <ContentContainer>
          <BookCards/>
        </ContentContainer>
      <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default Home;
