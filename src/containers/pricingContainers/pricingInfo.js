import React, { useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { SectionHeading } from 'constants/componentsStyles/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from 'constants/componentsStyles/Buttons.js';
import { API_BASE_URL, BASE_URL } from '../../config';
import Carousel from '../carousel';
import parse from 'html-react-parser';
import { checkTokens, mintTokens, tokenUnique, checkBalance, tokenBalance } from '../../store/components/tokens/nft';
import { currentAccount } from '../../store/components/users/auth';
import { SmallSpinner } from 'components/loader/loader';
// const PrimaryBackgroundContainer = tw.div`bg-white shadow-2xl relative px-10 mt-3 mb-3`;
const Container = tw.div`relative p-8`;
const CarouselContainer = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col  md:flex-row justify-start max-w-screen-xl mx-auto items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
// const VideoColumn = tw(Column)`md:w-2/12 lg:w-2/12 sm:w-full 2xl:w-1/12 flex-shrink-0 m-auto mt-20`;
// const TextColumn = styled(Column)((props) => [
//   tw`md:w-8/12 mt-16 md:mt-0`,
//   props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-1 lg:ml-2 md:order-first`,
// ]);
const Space = tw.div`mt-10`;
// const ImageColumn = tw.div`flex flex-col md:flex-row mt-0 items-center`;

// const SmallImageColumn = tw(Column)`object-contain md:w-3/12 flex-shrink-0 relative mb-20`;

const RandomImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative lg:-mt-12 md:-mt-12 sm:-mt-20`;
// const ContentImageColumn = tw(Column)`md:w-4/12 flex-shrink-0 relative`;
// const ComponentImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative lg:-mt-12 md:-mt-12 sm:-mt-20`;
const RandomTextColumn = styled(Column)((props) => [
  tw`items-start md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-0 lg:ml-0 md:order-last`,
]);

// const CollectionImageColumn = tw(Column)`md:w-6/12 lg:w-6/12 sm:w-full flex-shrink-0 relative`;
// const CollectionTextColumn = styled(Column)((props) => [
//   tw`md:w-6/12`,
//   props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-1 lg:ml-2 md:order-first`,
// ]);

// const MintTextColumn = styled(Column)((props) => [
//   tw`md:w-10/12 mt-16 md:mt-0`,
//   props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-1 lg:ml-2 md:order-first`,
// ]);
// const Grid = tw.div`grid grid-cols-3 gap-1`;
// const Image = tw.img`flex flex-row w-8/12 mt-40`;
const ArtImage = tw.img`flex flex-row w-7/12 m-auto mt-20`;
// const ContentImage = tw.img`flex flex-row w-4/12 m-auto`;
// const ComponentImage = tw.img`flex flex-row w-6/12 m-auto mt-12`;

// const CharacterImage = tw.img`flex flex-row w-96`;

// const CharacterImageColumn = tw(Column)`md:w-full flex-shrink-0 relative `;

// const Video = styled.img((props) => [
//   props.videoRounded && tw`rounded`,
//   props.videoBorder && tw`border`,
//   props.videoShadow && tw`shadow`,
// ]);

// const Statistics = tw.div`text-center md:text-left mt-6 pb-4 border-b-4`;
// const Token = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0`;
const TextContent = tw.div`max-w-screen-xl mx-auto text-center md:text-center`;
// const Content = tw.div`text-left md:text-left`;
// const CreatedBy = tw.div`sm:ml-72 md:ml-72 lg:ml-72 sm:-mt-12 md:-mt-12 lg:-mt-12`;

// const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
// const Key = tw.div`font-medium text-blue-600`;
const Left = tw.div`sm:text-left text-center`;
// const Mint = tw.div`ml-0`;
// const HeadingCenterBackground = tw(
//   SectionHeading
// )`mt-4 font-black text-white bg-blue-600 text-center text-3xl sm:text-4xl lg:text-5xl text-center md:text-center leading-tight`;

// const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-bold text-black text-left text-2xl sm:text-3xl lg:text-2xl text-center md:text-left leading-tight`;
// const SmallHeading = tw(
//   SectionHeading
// )`mt-4 font-black text-indigo-700 text-left text-2xl sm:text-2xl lg:text-3xl text-center md:text-left leading-tight`;

// const SmallDescription = tw.p`text-center md:text-left text-xs md:text-sm whitespace-pre-line lg:text-sm font-medium leading-relaxed text-secondary-100 mt-2`;
const Description = tw.p`text-center md:text-left text-xs md:text-base whitespace-pre-line lg:text-sm font-medium leading-relaxed text-black mt-2`;

// const HeadingCenter = tw(
//   SectionHeading
// )`mt-4 font-black text-indigo-700 text-center text-3xl sm:text-4xl lg:text-5xl text-center md:text-center leading-tight`;
// const DescriptionCenter = tw.p`border-b-2 pb-6 lg:px-10 lg:mx-16 mb-2 text-center md:text-center text-sm md:text-base whitespace-pre-line lg:text-base font-medium leading-relaxed text-secondary-100 mt-2`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-8 bg-black rounded-full md:mt-8 text-sm inline-block mx-auto md:mx-0 px-10 cursor-pointer`,
  props.buttonRounded && tw`rounded-full`,
]);

// const span = tw.span`p-4`;

const PricingInfo = ({
  id = '',
  subheading = '',
  heading = '',
  description = '',
  slide = '',
  mainTitle = '',
  mainPrice = '',
  mainToken = '',
  mainProjectId = '',
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
  saveToken,
  // account,
  // token,
  authToken,
  unique,
  balance,
  getBalance,
}) => {
  const des = parse(description);
  const campaignSummarys = parse(campaignSummary);
  const artContentSummarys = parse(artContentSummary);
  const mapSummarys = parse(mapSummary);

  let [file, setFile] = useState(Math.floor(Math.random() * parseInt(mainToken)) + 1);

  const RollImage = `${BASE_URL}admin/randomart/${mainProjectId}/images/${file}.png`;
  // const RollImage = BASE_URL + 'admin/artengine/' + generatorImage;

  const [RandomImage, setRandomImage] = useState(RollImage);
  const [loaded, isLoaded] = useState(false);

  let [counter, setCounter] = useState(0);

  const [_, setRoll] = useState(false);

  useEffect(() => {
    getBalance({
      project_id: mainProjectId,
    });
  }, [getBalance]);

  const fetchData = async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/check/token/address`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
        method: 'POST',
      });
      const json = await response.json();

      if (json.success === true) {
        setFile(token);
      }

      return json.success;
    } catch (error) {
      console.log('error', error);
    }
  };

  async function generateRandomImage() {
    // const url = API_BASE_URL + '/creator/' + id;

    while (true) {
      try {
        let minted = await fetchData(Math.floor(Math.random() * parseInt(mainToken)) + 1);

        if (minted === true) break;
      } catch (error) {
        break;
      }
    }

    const ImageURL = `${BASE_URL}admin/randomart/${mainProjectId}/images/${file}.png`;

    if (ImageURL) {
      setRandomImage(ImageURL);
      setRoll(true);
    }
  }

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
            mainToken={mainToken}
            saveToken={saveToken}
            tokenId={file}
            mainPrice={mainPrice}
            mainProjectId={mainProjectId}
            mainSubTitle={mainSubTitle}
            mainDescription={mainDescription}
            generateRandomImage={generateRandomImage}
            balance={balance}
            getBalance={getBalance}
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
                <>
                  {loaded ? (
                    <SmallSpinner />
                  ) : (
                    <PrimaryButton
                      buttonRounded={buttonRounded}
                      as="a"
                      onClick={async () => {
                        isLoaded(true);
                        console.log(counter);
                        if (counter <= 5) {
                          setCounter((counter = counter + 1));
                          console.log('clicked Roll');
                          await generateRandomImage();
                          isLoaded(false);
                        } else {
                          console.log('disabled');
                        }
                      }}
                    >
                      Roll
                    </PrimaryButton>
                  )}
                </>
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
  authToken: (data) => dispatch(checkTokens(data)),

  saveToken: (data) => dispatch(mintTokens(data)),

  getBalance: (data) => dispatch(checkBalance(data)),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  account: currentAccount,

  balance: tokenBalance,

  unique: tokenUnique,
});

export default connect(mapStateToProps, mapDispatchToProps)(PricingInfo);
