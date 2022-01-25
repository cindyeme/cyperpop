import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from 'constants/componentsStyles/Headings.js';
import { SectionDescription } from 'constants/componentsStyles/Typography.js';
import { Container, ContentWithPaddingXl } from 'constants/componentsStyles/Layouts.js';
import Cross from 'assets/images/cross.png';
import Rocket from 'assets/images/rocket.png';
import Cup from 'assets/images/cup.png';
import Wallet from 'assets/images/wallet.png';
import { Link } from 'react-router-dom';

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const FourColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/4 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-5 h-5`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-sm leading-none`}
  }

  .description {
    ${tw`mt-4 text-xs font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none focus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const Features = ({
  cards = [
    {
      imageSrc: Wallet,
      title: 'Setup Wallet & Profile',
      description:
        'Connect your wallet to send & receive tokens. Create a profile to tell your community what you are working on',
    },
    {
      imageSrc: Cup,
      title: 'Setup Contest & Prizes',
      description:
        'Setup your own NFT contest to raise funds, launch products, support causes, etc. Provide prizes & giveaways to help attract the crowds',
    },
    {
      imageSrc: Cross,
      title: 'Create Attractive Artwork',
      description:
        'From profile pics to mobile wallpapers artwork  is a way for buyers to use their NFTs as a social flex & is a great conversation starter',
    },
    {
      imageSrc: Rocket,
      title: 'Spread the News!',
      description:
        'Connect your wallet to send & receive tokens. Create a profile to tell your community what you are working on',
    },
  ],
  heading = '',
  subheading = '',
  description = '',
  imageContainerCss = null,
  imageCss = null,
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <FourColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card >
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt="" css={imageCss} />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
              </Card>
            </Column>
          ))}
        </FourColumnContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default Features;
