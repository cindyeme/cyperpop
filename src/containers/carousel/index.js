import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { contractInstance, currentAccount, providerInstance } from '../../store/components/users/auth';
import { mintTokens } from '../../store/components/tokens/nft';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from 'constants/componentsStyles/Headings.js';
import { ReactComponent as ChevronLeftIcon } from 'feather-icons/dist/icons/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from 'feather-icons/dist/icons/chevron-right.svg';
import { BASE_URL } from '../../config';
import 'slick-carousel/slick/slick.css';
import parse from 'html-react-parser';
import { mintCyberPopToken } from '../../web3/Web3Client';
import axios from 'axios';
import history from 'utils/history';
import swal from 'sweetalert';
// import { mintCyberPopToken } from '../../web3/Web3Client';

const PrimaryButton = tw.button`px-8 py-3 font-bold rounded-full bg-mint text-black hover:bg-white  hover:text-mint cursor-pointer`;

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto`;
const TestimonialsContainer = tw.div`mt-16 lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 `;
// const TestimonialTextSlider = tw(Slider)``;
// const TestimonialText = tw.div`outline-none`;

const ImageAndControlContainer = tw.div`relative outline-none shadow-2xl p-6`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}"); `,
  tw`rounded rounded-b-none bg-contain w-full bg-center h-24 sm:h-96 lg:h-64 bg-no-repeat`,
]);

const TextContainer = styled.div((props) => [
  tw`flex flex-col w-full lg:w-7/12 mt-4`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`,
]);

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 md:h-full h-2/4 flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 rounded-full  hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8 shadow-2xl rounded-full text-black`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, Contract, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ChevronRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ChevronLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const Subheading = tw(SubheadingBase)`mb-4`;
const Description = tw.p`max-w-md text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-xs sm:text-sm lg:text-base font-medium mt-8 text-black`;

// const QuoteContainer = tw.div`relative mt-10 lg:mt-20`;
// const Quote = tw.blockquote`text-center lg:text-left text-sm sm:text-lg lg:text-xl xl:text-2xl`;
// const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
// const CustomerProfilePicture = tw.img`rounded-full w-20 h-20`;
// const CustomerTextInfo = tw.div`text-center lg:text-left sm:ml-6 mt-2 sm:mt-0`;
// const CustomerName = tw.h5`font-semibold text-xl lg:text-2xl xl:text-3xl text-primary-500`;
// const CustomerTitle = tw.p`font-medium text-secondary-100`;
const PrimaryBackgroundContainer = tw.div`bg-white  relative px-10 mt-3 mb-3`;

// const MintTextColumn = tw.div`bg-white relative px-10 mt-3 mb-3 w-full`;
// const MintText = tw.div`bg-white relative px-10 mt-3 mb-3`;
// const MintColumn = tw.div`bg-white relative px-10 mt-3 mb-3 w-2/12`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none rounded bg-black p-10 mt-10`;
const Feature = tw.div`m-auto mt-0 ml-0  flex items-center md:items-start flex-col md:mr-8 last:mr-0`;
const FeatureRight = tw.div`m-auto mr-0  flex items-center md:items-start flex-col md:mr-8 last:mr-0`;
const FeatureHeadingContainer = tw.div`flex items-center`;
const FeatureHeading = tw.div`ml-3 font-bold text-base text-white`;

const Carousel = ({
  image = '',
  mainTitle = '',
  mainSubTitle = '',
  mainDescription = '',
  mainPrice = '',
  mainToken = '',
  mainProjectId = '',
  baseURL = '',
  folder = '',
  heading = 'Testimonials',
  description = 'Here are what some of our amazing customers are saying about our hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  testimonials = null,
  textOnLeft = false,
  tokenId = '',
  Contract,
  account,
  provider,
  saveToken,
  generateRandomImage,
  getBalance,
  balance,
}) => {
  const des = parse(mainDescription);

  const [imageSliderRef, setImageSliderRef] = useState(null);

  const [textSliderRef, setTextSliderRef] = useState(null);

  const [isMinting, setMint] = useState(false);

  const mint = async (tokenId) => {
    await generateRandomImage();

    const url = `${BASE_URL}admin/randomart/${mainProjectId}/images/${tokenId}.png`;

    try {
      const resp = await axios.post(`http://localhost:4000/fileRoute/uploadnft`, { url });

      console.log(`uploadnft to ipfs respponse >> ${JSON.stringify(resp.data.data)}`);

      if (resp && resp.data && resp.data.data && resp.data.data.hasOwnProperty('IpfsHash')) {
        await Contract.methods.mint('1').send({ from: account, value: provider.utils.toWei('0.1') });

        saveToken({
          token: `${tokenId}`,

          address: account,

          project_id: mainProjectId,
        });

        getBalance({
          project_id: mainProjectId,
        });
      }
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  return (
    <Container>
      <Content>
        <TestimonialsContainer>
          <Testimonials>
            <Testimonial>
              <TestimonialImageSlider
                nextArrow={<NextArrow />}
                prevArrow={<PreviousArrow />}
                ref={setImageSliderRef}
                asNavFor={textSliderRef}
                fade={true}
              >
                {image.map((img, index) => (
                  <PrimaryBackgroundContainer>
                    <ImageAndControlContainer key={index}>
                      <Image imageSrc={baseURL + folder + img} />
                    </ImageAndControlContainer>
                  </PrimaryBackgroundContainer>
                ))}
              </TestimonialImageSlider>
              <TextContainer textOnLeft={textOnLeft}>
                <Subheading>{mainSubTitle}</Subheading>
                <SectionHeading>{mainTitle}</SectionHeading>
                <Description>{des}</Description>
                <Features>
                  <Feature>
                    <FeatureHeadingContainer>
                      <FeatureHeading>Price: {mainPrice} MATIC</FeatureHeading>
                    </FeatureHeadingContainer>
                    <FeatureHeadingContainer>
                      <FeatureHeading>{balance} Left</FeatureHeading>
                    </FeatureHeadingContainer>
                  </Feature>
                  <FeatureRight>
                    <FeatureHeadingContainer>
                      <PrimaryButton
                        disabled={!!isMinting}
                        onClick={async () => {
                          // const url = `${BASE_URL}admin/randomart/${mainProjectId}/images/${tokenId}.png`;

                          // const metadata = `${BASE_URL}admin/randomart/${mainProjectId}/json/${tokenId}.json`;

                          try {
                            // const resp = await axios.post(`http://localhost:4000/fileRoute/uploadnft`, {
                            //   url,
                            //   metadata,
                            // });
                            // console.log(`uploadnft to ipfs respponse >> ${JSON.stringify(resp.data.data)}`);
                            // if (resp && resp.data && resp.data.data && resp.data.data.hasOwnProperty('IpfsHash')) {
                            setMint(true);

                            const tx = await Contract.methods
                              .mint('1')

                              .send({ from: account, value: provider.utils.toWei('74') });

                            console.log(tx);

                            await saveToken({
                              token: `${tx.events.Transfer.returnValues.tokenId}`,
                              address: account,
                              hash: tx.transactionHash,
                              project_id: mainProjectId,
                            });

                            setMint(false);

                            await getBalance({
                              project_id: mainProjectId,
                            });

                            swal({
                              title: 'Success!',
                              text: 'NFT minited successfully!',
                              icon: 'success',
                              button: 'Contiune',
                            });
                          } catch (err) {
                            // Handle Error Here
                            console.error(err);
                            setMint(false);

                            // swal({
                            //   title: 'Error!',
                            //   text: 'NFT miniting failed!',
                            //   icon: 'error',
                            //   button: 'Try Again',
                            // });
                          }
                        }}
                      >
                        {isMinting ? ' Minting....' : 'Buy Now'}
                      </PrimaryButton>
                    </FeatureHeadingContainer>
                  </FeatureRight>
                </Features>
              </TextContainer>
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>
    </Container>
  );
};
// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  Contract: contractInstance,

  provider: providerInstance,

  account: currentAccount,
});

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  // saveToken: (data) => dispatch(mintTokens(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
