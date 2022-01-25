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
  tw`bg-cover bg-center h-64 rounded rounded-b-none`,
]);

const Details = tw.div`p-6 rounded-full flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`items-center mt-3`;
const Meta = styled.div`
  ${tw`text-black font-medium mt-4 text-xs flex items-center leading-none mr-6 font-bold last:mr-0`}
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

const CampaignCard = ({
  heading = 'Elementals',
  description = 'Raisingity for at risk youths, support & awareness to build its sports facil...',
  primaryButtonText,
  buttonRounded = true,
  link
}) => {
  return (
    <Column>
      <Card>
        <Link to={link}>
          <Image imageSrc={item} />
        </Link>
        <Details>
          <Link to={link}>
            <Title>{heading}</Title>
          </Link>{' '}
          by
          <TextLink to={link}>Lion's Club</TextLink>
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
            <Link to="/campaign/[id]">
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

export default CampaignCard;
