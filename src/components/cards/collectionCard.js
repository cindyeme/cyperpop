import tw from 'twin.macro';
import styled from 'styled-components';
import { PrimaryButton as PrimaryButtonBase } from 'constants/componentsStyles/Buttons.js';
// import React, { useState, useEffect } from 'react';
// import { API_BASE_URL } from '../../config';
import { ReactComponent as Briefcase } from 'feather-icons/dist/icons/briefcase.svg';
import { ReactComponent as Calendar } from 'feather-icons/dist/icons/calendar.svg';
import ReadMoreReact from 'read-more-react';
import { Link } from 'react-router-dom';
import item from '../../assets/images/item_3.png';

const Column = tw.div`relative`;

const Card = tw.div`flex flex-col h-full border hover:shadow-2xl transition duration-300 ease-linear bg-white`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-64 mx-3`,
]);
const Details = tw.div`p-5 rounded-full flex-1 flex flex-col lg:block text-center md:text-left`;
const MetaContainer = tw.div` mt-3`;
const Meta = styled.div`
  ${tw`text-black font-medium mt-4 text-xs flex  leading-none mr-6 font-bold last:mr-0`}
`;
const LootDesc = tw.div`text-xs ml-8 mt-2 text-black`;
const Div = tw.div`ml-3 mt-1`;

const Title = tw.h5` leading-snug font-bold text-black text-lg`;
const Description = tw.p`mt-2 text-xs text-gray-600`;
const TextLink = tw(Link)`pl-1 text-sm text-black hover:underline`;
const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-5 text-sm inline-block mx-auto md:mx-0 bg-black rounded-full`,
  props.buttonRounded && tw`rounded-full`,
]);
const Gallery = tw.img`object-cover`;
const ImgGrid = tw.div`grid grid-cols-3 gap-x-3 m-3`;

const CollectionCard = ({
  heading = 'Elementals',
  description = 'Raisingity for at risk youths, support & awareness to build its sports facil...',
  primaryButtonText,
  buttonRounded = true,
  link,
  creator = "Lion's Club",
  images,
}) => {
  return (
    <Column>
      <Card>
        <ImgGrid>
          {images.map((el, idx) => (
            <div>
              <Gallery key={idx} src={el} alt={el} />
            </div>
          ))}
        </ImgGrid>
        <Link to={link}>
          <Image imageSrc={item} />
        </Link>
        <Details>
          <Link to={link}>
            <Title>{heading}</Title>
          </Link>{' '}
          by
          <TextLink to={link}>{creator}</TextLink>
          <Description>
            <ReadMoreReact text={description} max={100} readMoreText="...read more" />
          </Description>
          <MetaContainer>
            <Meta>
              <Briefcase />
              <Div>Loot Chest</Div>
            </Meta>
            <LootDesc>1st 50 mints wins a free physical Jersey</LootDesc>
            <Meta>
              <Calendar />
              <Div>15 Dec 2021 at 12pm</Div>
            </Meta>
            <Link to={link}>
              {primaryButtonText ? (
                <PrimaryButton buttonRounded={buttonRounded}>{primaryButtonText}</PrimaryButton>
              ) : (
                <></>
              )}
            </Link>
          </MetaContainer>
        </Details>
      </Card>
    </Column>
  );
};

export default CollectionCard;
