import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from 'constants/componentsStyles/Headings.js';

export const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-blue-600 text-gray-100 focus:bg-blue-600 focus:text-gray-200 focus:outline-none focus:outline-none transition duration-300`;

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto lg:py-10 md:py-5`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
// const videoCss = tw`rounded-4xl`;
// const Image = styled.div((props) => [
//   `background-image: url("${props.imageSrc}");`,
//   tw`rounded bg-contain bg-no-repeat bg-center h-full`,
// ]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const HeadingContent = tw.div`max-w-screen-xl mx-auto md:py-10 sm:py-5 py-10 text-center md:text-center`;

const Subheading = tw(SubheadingBase)`text-center md:text-center`;
// const Heading = tw(
//   SectionHeading
// )`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg whitespace-pre-line font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`text-center md:text-left mt-6 `;
const Statistic = tw.div`w-full text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
// const Token = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-blue-600`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const PricingStats = ({
  subheading = '',
  description = '',
  campaignLink = '',
  primaryButtonText = 'Back this project',
  primaryButtonUrl = '/campaignpage/' + campaignLink,
  imageSrc = '',
  videoCss = null,
  imageCss = null,
  videoSrc = '',
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const defaultStatistics = [
    {
      key: 'Pleged of S$ 47,514 goal',
      value: 'S$ 44,102',
    },
    {
      key: '611',
      value: 'backers',
    },
    {
      key: '16',
      value: 'days to go',
    },
  ];

  if (!statistics) statistics = defaultStatistics;

  return (
    <Container>
      <HeadingContent>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Description>{description}</Description>
      </HeadingContent>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <RightColumn>
          <video src={videoSrc} css={videoCss} controls autoplay loop />
        </RightColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
            <PrimaryButton as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default PricingStats;
