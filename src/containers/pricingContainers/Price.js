import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
// import { SectionHeading } from "components/styles/Headings.js";
// import { PrimaryLink as PrimaryLinkBase } from "components/styles/Links.js";
import { PrimaryButton as PrimaryButtonBase } from 'constants/componentsStyles/Buttons.js';
import { ReactComponent as Heart } from 'feather-icons/dist/icons/heart.svg';
import { ReactComponent as Views } from 'feather-icons/dist/icons/eye.svg';
import { Link } from 'react-router-dom';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div``;
// const HeadingColumn = tw(Column)`w-full xl:w-1/3`;
const CardColumn = tw(Column)`w-full`;
const LinkTo = tw(Link)` pb-1 font-bold mt-2 mx-4`;

// const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
// const HeadingTitle = tw(SectionHeading)`xl:text-left leading-tight`;
// const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
// const PrimaryLink = styled(PrimaryLinkBase)`
//   ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
//   svg {
//     ${tw`ml-2 w-5 h-5`}
//   }
// `;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
// const CardImage = styled.div(props => [
//   `background-image: url("${props.imageSrc}");`,
//   tw`h-80 bg-cover bg-center rounded`
// ]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardType = tw.div`text-blue-500 font-bold text-lg`;
const CardPrice = tw.div`font-semibold text-sm text-gray-600`;
const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex font-semibold text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-8`;

const Price = ({ owned = '', views = '', favourites = '', creator = '/creator' }) => {
  const cards = [
    {
      type: 'Beachfront',
      pricePerDay: '$99',
      title: 'A Trip to the Bahamas and the Carribean Ocean',
      trendingText: 'Trending',
      durationText: '7 Days Tour',
      locationText: 'Africa',
    },
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardText>
                  <CardHeader>
                    <CardType>{card.type}</CardType>
                    <CardPrice>
                      <CardPriceAmount>{card.pricePerDay}</CardPriceAmount> per day
                    </CardPrice>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      Owned By <LinkTo to="/creator">{owned}</LinkTo>
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <Views /> {views}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <Heart /> {favourites}
                    </CardMetaFeature>
                    <CardMetaFeature></CardMetaFeature>
                  </CardMeta>
                  <CardAction>Book Now</CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};

export default Price;