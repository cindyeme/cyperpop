import React, { useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { SectionHeading } from 'components/misc/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';
import { BASE_URL } from '../../config';
import Carousel from '../../carousel';
import parse from 'html-react-parser';
import { checkTokens, userTokens } from '../../store/components/tokens/nft';
import { currentAccount } from '../../store/components/users/auth';
const Container = tw.div`relative p-8`;
const CarouselContainer = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col  md:flex-row justify-start max-w-screen-xl mx-auto items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const Space = tw.div`mt-10`;

const RandomImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative lg:-mt-12 md:-mt-12 sm:-mt-20`;
const RandomTextColumn = styled(Column)((props) => [
  tw`items-start md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-0 lg:ml-0 md:order-last`,
]);
const ArtImage = tw.img`flex flex-row w-7/12 m-auto mt-20`;
const TextContent = tw.div`text-center md:text-center max-w-screen-xl mx-auto`;
const Left = tw.div`text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-bold text-black text-left text-2xl sm:text-3xl lg:text-2xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-left text-xs md:text-base whitespace-pre-line lg:text-sm font-medium leading-relaxed text-black mt-2`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-8 bg-black rounded-full md:mt-8 text-sm inline-block mx-auto md:mx-0 px-10 cursor-pointer`,
  props.buttonRounded && tw`rounded-full`,
]);

const TwoColWithImage = ({
  id = '',
  subheading = '',
  heading = '',
  description = '',
  slide = '',
  mainTitle = '',
  mainSubTitle = '',
  mainDescription = '',
  primaryButtonText = 'Learn More',
  primaryButtonUrl = '/campaign/' + id,
  videoSrc = '',
  buttonRounded = true,
  videoRounded = true,
  videoBorder = false,
  videoShadow = false,
  videoDecoratorBlob = false,
  videoDecoratorBlobCss = null,
  textOnLeft = true,
  created = '',
  statistics = '',
  creatorId = '',
  generatorTitle = '',
  generatorSummary = '',
  generatorSecondTitle = '',
  generatorSecondSummary = '',
  generatorImage = '',
  creator = '/creator/' + creatorId,
  artContentTitle = '',
  artContentSummary = '',
  mapTitle = '',
  mapSummary = '',
  campaignTitle = '',
  campaignSummary = '',
  mintCyberPopToken,
  account,
  token,
}) => {
  const des = parse(description);
  const campaignSummarys = parse(campaignSummary);
  const artContentSummarys = parse(artContentSummary);
  const mapSummarys = parse(mapSummary);

  const RollImage = `${BASE_URL}admin/randomart/images/${1}${generatorImage}`;

  const [RandomImage, setRandomImage] = useState(RollImage);

  let [file, setFile] = useState(0);

  let [counter, setCounter] = useState(0);

  const [roll, setRoll] = useState(false);

  const generateRandomImage = () => {
    setFile((file = Math.floor(Math.random() * 200) + 1));

    const ImageURL = `${BASE_URL}admin/randomart/images/1/${file}.png`;

    if (ImageURL) {
      setRandomImage(ImageURL);
      setRoll(true);
    }
  };

  return (
    <>
      <Space />

      {slide ? (
        <CarouselContainer>
          <Carousel
            baseURL={BASE_URL}
            folder="admin/elementsliders/"
            image={slide}
            mainTitle={mainTitle}
            mainSubTitle={mainSubTitle}
            mainDescription={mainDescription}
          />
        </CarouselContainer>
      ) : (
        ''
      )}

      <Container>
        <TextContent>
          <Heading>{artContentTitle}</Heading>
          <Description>{artContentSummarys}</Description>
        </TextContent>
      </Container>

      <Container>
        <TextContent>
          <Heading>{heading}</Heading>
          <Description>{des}</Description>
        </TextContent>
      </Container>

      <Container>
        <TextContent>
          <Heading>{generatorTitle}</Heading>
          <Description>{generatorSummary}</Description>
        </TextContent>

        <TwoColumn>
          <RandomImageColumn>
            <ArtImage src={RandomImage} />
          </RandomImageColumn>
          <RandomTextColumn textOnLeft={textOnLeft}>
            <TextContent>
              <Heading>{generatorSecondTitle}</Heading>
              <Description>{generatorSecondSummary}</Description>
              <Left>
                <PrimaryButton
                  buttonRounded={buttonRounded}
                  as="a"
                  onClick={() => {
                    console.log(counter);
                    if (counter <= 5) {
                      setCounter((counter = counter + 1));
                      console.log('clicked Roll');
                      generateRandomImage();
                    } else {
                      console.log('disabled');
                    }
                  }}
                >
                  Roll
                </PrimaryButton>
                <Description>
                  *Please note that this is a preview only and does not represent the actual NFT{' '}
                </Description>
              </Left>
            </TextContent>
          </RandomTextColumn>
        </TwoColumn>
      </Container>

      {campaignTitle ? (
        <Container>
          <TextContent>
            <Heading>{campaignTitle}</Heading>
            <Description>{campaignSummarys}</Description>
          </TextContent>
        </Container>
      ) : (
        ''
      )}

      {mapTitle ? (
        <Container>
          <TextContent>
            <Heading>{mapTitle}</Heading>
            <Description>{mapSummarys}</Description>
          </TextContent>
        </Container>
      ) : (
        ''
      )}
    </>
  );
};

// mapping the cuurent state as a component prop
// dispatching action
const mapDispatchToProps = (dispatch) => ({
  authToken: (address, data) => dispatch(checkTokens(address, data)),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  account: currentAccount,

  token: userTokens,
});

export default connect(mapStateToProps, mapDispatchToProps)(TwoColWithImage);
