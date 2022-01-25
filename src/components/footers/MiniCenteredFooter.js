import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Container as ContainerBase } from 'constants/componentsStyles/Layouts.js';
import logo from '../../assets/images/logowhite.png';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter-icon.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/svg/youtube-icon.svg';
// import { Link } from 'react-router-dom';

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 font-display `;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-full`;

// const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
// const LinkTo = tw(
//   Link
// )`border-b-2 border-transparent focus:text-gray-300 focus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-white`;
const Footer = () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          {/* <LinksContainer>
            <LinkTo to="/">Home</LinkTo>
            <LinkTo to="/">About</LinkTo>
            <LinkTo to="/">Contact Us</LinkTo>
          </LinksContainer> */}
          <SocialLinksContainer>
            <SocialLink href="#">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="#">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="#">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </Row>
        <CopyrightText>&copy; Copyright 2021, CyberPop Inc. All Rights Reserved.</CopyrightText>
      </Content>
    </Container>
  );
};

export default Footer;
