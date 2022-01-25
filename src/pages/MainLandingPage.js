import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { Main } from 'layout/PageMotion';
import Hero from 'containers/mainLandingPgContainers/hero/TwoColumnWithOneVideo';
import MainFeature from 'containers/mainLandingPgContainers/mainLaningPgFeature';
import Feature from 'containers/featuresContainer/features';
import video from 'assets/images/bg.jpeg';
import { API_BASE_URL } from '../config';
import { LoaderSpin } from 'components/loader/loader';

import Header from 'components/headers/light.js';
import Footer from 'components/footers/MiniCenteredFooter';

const Index = () => {
  const [projects, setProjects] = useState('');
  const [loaded, isLoaded] = useState(true);
  useEffect(() => {
    const url = API_BASE_URL + '/projects';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setProjects(json.data);
        isLoaded(false);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  const PrimaryBackgroundContainer = tw.div`bg-white relative font-display`;

  // const Subheading = tw.span`tracking-wider text-sm font-medium`;
  // const HighlightedText = tw.span`text-indigo-700`;
  // const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  // const Description = tw.span`inline-block whitespace-pre-line`;
  return (
    <>
      {loaded ? (
        <LoaderSpin />
      ) : (
        <>
          {projects ? (
            <PrimaryBackgroundContainer>
              <Main>
                <Header />
              </Main>
              <Hero
                heading="Create & manage NFT collections"
                descriptionOne="Rapidly generate thousands of NFTs with art engines"
                descriptionTwo="Promote NFTs through contests & giveaways"
                descriptionThree="Provide exclusive access areas to NFT holders"
                imageDecoratorBlob={true}
                primaryButtonText="Learn More"
                videoSrc={video}
              />
              <Main>
                <MainFeature
                  buttonRounded={false}
                  textOnLeft={false}
                  imageDecoratorBlob={true}
                  imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
                />
                <Feature />
              </Main>
              <Footer />
            </PrimaryBackgroundContainer>
          ) : (
            ''
          )}
        </>
      )}
    </>
  );
};

export default Index;
