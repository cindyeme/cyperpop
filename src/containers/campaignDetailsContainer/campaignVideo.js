import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro';
import { ContentWithPaddingXl } from 'constants/componentsStyles/Layouts.js';
import { API_BASE_URL, BASE_URL } from '../../config';
import { Link, useParams } from 'react-router-dom';

import { PrimaryButton as PrimaryButtonBase } from 'constants/componentsStyles/Buttons.js';
import { ReactComponent as StarIcon } from 'assets/svg/star-icon.svg';
import { ReactComponent as Icon } from 'assets/svg/ethereum.svg';

import {PageMotion} from 'layout/PageMotion.js';
import Footer from 'components/footers/MiniCenteredFooter.js';
import { LoaderSpin } from 'components/loader/loader';
// import TabGrid from "components/cards/TabCardGrid.js";

const TabContent = tw(motion.div)`mt-6 mb-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const Container = tw.div`bg-gray-300 relative`;

const EthIcon = styled(Icon)`
  ${tw`h-10 w-20 absolute ml-32 -mt-16`}
`;
const Testimonials = tw.div`flex flex-col lg:flex-row w-full items-center lg:items-stretch bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500`;
const TestimonialContainer = tw.div`mt-16 mb-10 w-full`;
const Testimonial = tw.div`px-4 text-center max-w-4xl  mx-auto flex flex-col items-center`;
const Title = tw.p`mt-4  text-black text-3xl font-black w-full tracking-wide`;
const Details = tw.p`my-4 text-gray-900 font-semibold w-full tracking-wide whitespace-pre-line`;

const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion(Link))`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url('${props.imageSrc}');
    `}
  ${tw`mb-6 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 gap-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm mt-4`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-blue-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600 truncate`;
const CardPrice = tw.p`mt-4 text-xl font-bold absolute -mt-16 ml-40 pt-2 pl-6`;

const Campaign = (link = '/nft/') => {
  const { id } = useParams();

  const [campaign, setCampaign] = useState('');

  const [nfts, setNfts] = useState('');

  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const url = API_BASE_URL + '/campaign/' + id;

    (async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.campaign.nfts);
        setNfts(json);
        setCampaign(json);
        setLoaded(false);
      } catch (error) {
        setLoaded(false);
        console.log('error', error);
      }
    })();
  });

  return (
    <>
      {loaded ? (
        <LoaderSpin />
      ) : (
        <PageMotion>
        
          {Object.keys(campaign).map((crt, index) => (
            <>
              <Container>
                <ContentWithPaddingXl>
                  <Testimonials>
                    <TestimonialContainer>
                      <Testimonial>
                        <Title>{campaign[crt].title}</Title>
                        <Details>{campaign[crt].summary}</Details>
                        <video src={BASE_URL + 'admin/campaign/' + campaign[crt].video} controls />
                      </Testimonial>
                    </TestimonialContainer>
                  </Testimonials>
                </ContentWithPaddingXl>
              </Container>
              <TabContent>
                {Object.keys(nfts).map((nft, index) => (
                  <CardContainer key={index}>
                    <Card
                      className="group"
                      to={'/nft/' + nfts[nft].nftId}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <CardImageContainer imageSrc={nfts[nft].nftfile}>
                        <video src={BASE_URL + 'admin/nft/' + nfts[nft].nftFile} />
                        <CardRatingContainer>
                          <CardRating>
                            <StarIcon />
                            {5.0}
                          </CardRating>
                          <CardReview>({12})</CardReview>
                        </CardRatingContainer>
                        <CardHoverOverlay
                          variants={{
                            hover: {
                              opacity: 1,
                              height: 'auto',
                            },
                            rest: {
                              opacity: 0,
                              height: 0,
                            },
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardButton>Buy Now</CardButton>
                        </CardHoverOverlay>
                      </CardImageContainer>
                      <CardText>
                        <CardTitle>{nfts[nft].nftTitle}</CardTitle>
                        <CardContent>{nfts[nft].nftDescription}</CardContent>
                        <EthIcon />
                        <CardPrice>{nfts[nft].nftPrice}</CardPrice>
                      </CardText>
                    </Card>
                  </CardContainer>
                ))}
              </TabContent>
            </>
          ))}
          {/* <Footer /> */}
        </PageMotion>
      )}
    </>
  );
};

export default Campaign;
