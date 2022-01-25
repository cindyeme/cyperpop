import React from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import { PINATA_BASE_URL } from '../../config';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import NftCard from 'components/cards/nftCard';
import { InPageSpin } from 'components/loader/loader';
import { NoArt } from 'containers/staticPages/staticPages';
const Container = tw.div`grid mb-8`;
const TabContent = tw.div`grid md:gap-8 gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-4`;

const ProfileGrid = ({ url, acct, nftData, currentProfile }) => {
  // const tabsKeys = Object.keys(props);
  // const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  return (
    <Container>
      {`/profile/${acct}` === url ? (
        <>
          {nftData && nftData.length !== 0 ? (
            <>
              <TabContent>
                {nftData.map((card, index) => (
                  <>
                    <NftCard
                      card={card}
                      key={index}
                      imageLoad={card.edition}
                      imagesrc={`https://gateway.pinata.cloud/ipfs/QmPJcd66nhXg37ppHED949xh5BVeUaXZHuoQXHDYTYyyhm/${card.edition}.png`}
                      collectionName={card.collectionName}
                      currentProfile={currentProfile}
                      link={`/nft-info/${card.dna}`}
                    />
                  </>
                ))}
              </TabContent>
            </>
          ) : (
            <NoArt />
          )}
        </>
      ) : (
        ''
      )}
    </Container>
  );
};

export default ProfileGrid;
