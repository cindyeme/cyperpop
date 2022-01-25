import React, { useState, useEffect } from 'react';
import { Main } from 'layout/PageMotion.js';
import tw from 'twin.macro';
import CreatorProfileImage from 'containers/creatorContainers/creatorProfileImage.js';
import CreatorGrid from 'containers/creatorContainers/CreatorGrid.js';
import Footer from 'components/footers/MiniCenteredFooter.js';
// import NFTSingleImage from "containers/features/NFTSingleImage.js";
import { API_BASE_URL } from '../config';
import { useParams } from 'react-router-dom';
import { LoaderSpin } from 'components/loader/loader';
import { CreatorAccountNotFound } from 'containers/staticPages/staticPages';
import Header from 'components/headers/light.js';
const PrimaryBackgroundContainer = tw.div` font-display`;

const CreatorPage = ({ Contract }) => {
  const { id } = useParams();
  const [creator, setCreator] = useState('');

  const [loaded, isLoaded] = useState(true);

  const [metadata, setMetadata] = useState([]);

  useEffect(() => {
    let range = (range) => {
      let start = 0,
        bucket = Array(range);

      while (start < range) bucket[start++] = start;

      return bucket;
    };

    (async () => {
      try {
        const metas = range(200).map(async (_, index) => {
          const gateway = `https://gateway.pinata.cloud/ipfs/QmeHfNzKbHv8jxNyZxUMDa5M6xKAoDjJUHZR7ELeAAXe9Z/${
            index + 1
          }.json`;

          const response = await fetch(gateway);

          const data = await response.json();

          return data;
        });

        const metadata = await Promise.all(metas);

        setMetadata(metadata);
      } catch (error) {
        console.log(error);
      }
    })();

    const url = API_BASE_URL + '/creator/' + id;

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const json = await response.json();

        console.log(json);

        setCreator(json);

        isLoaded(false);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, [id]);
  console.log(creator, metadata, 'lll');
  return (
    <>
      {loaded ? (
        <LoaderSpin />
      ) : (
        <>
          {creator ? (
            <PrimaryBackgroundContainer>
              <Header />
              <CreatorProfileImage creator={creator} />
              <Main>
                <CreatorGrid metadata={metadata} creator={creator} />
              </Main>
              <Footer />
            </PrimaryBackgroundContainer>
          ) : (
            <CreatorAccountNotFound />
          )}
        </>
      )}
    </>
  );
};

export default CreatorPage;
