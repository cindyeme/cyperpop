import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
//eslint-disable-next-line
import { css } from 'styled-components/macro';
import Image from 'assets/images/back.png';

const BackgroundImage = styled.div`
  background-image: url('${Image}');
  width: 100%;
  // background-repeat: no-repeat;
`;

const Container = tw.div`relative flex sm:px-10 px-2`;
const TwoColumn = tw.div`flex flex-col md:flex-row md:items-center h-full  py-20 md:py-24`;
const LeftColumn = tw.div`relative bg-white bg-opacity-50 mx-6 p-6 self-stretch rounded lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-bold text-black text-2xl md:text-4xl leading-snug max-w-3xl`;
const Paragraph = tw.li`text-left lg:list-disc sm:list-none my-2 lg:my-3 text-xs sm:text-sm lg:text-base font-normal text-black max-w-lg whitespace-pre-line mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded-full bg-black text-white focus:outline-none focus:outline-none transition duration-300`;
// const WatchVideoButton = styled.button`
//   ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 focus:text-blue-400 focus:outline-none`}
//   .playIcon {
//     ${tw`stroke-1 w-12 h-12`}
//   }
//   .playText {
//     ${tw`ml-2 font-medium`}
//   }
// `;
const Img = tw.img`w-full`;

export default ({
  heading = '',
  descriptionOne = '',
  descriptionTwo = '',
  descriptionThree = '',
  primaryButtonText = '',
  primaryButtonUrl = '#',
  videoSrc = '',
}) => {
  // const [show, setShow]= React.useState(false)
  return (
    <>
      <BackgroundImage>
        <Container>
          <TwoColumn>
            <LeftColumn>
              <Heading>{heading}</Heading>
              <Paragraph>{descriptionOne}</Paragraph>
              <Paragraph>{descriptionTwo}</Paragraph>
              <Paragraph>{descriptionThree}</Paragraph>
              {primaryButtonText ? (
                <Actions>
                  <PrimaryButton as="a" href={primaryButtonUrl}>
                    {primaryButtonText}
                  </PrimaryButton>
                </Actions>
              ) : (
                <></>
              )}
            </LeftColumn>
            <RightColumn>
              <Img src={videoSrc} alt="cryber-pop" />
            </RightColumn>
          </TwoColumn>
        </Container>
      </BackgroundImage>
    </>
  );
};
