import React, { useState, useEffect } from 'react';
import {PageMotion} from 'layout/PageMotion.js';
import NFT from 'components/NFTSingleImage.js';
import Header from 'components/headers/light.js';
import Footer from 'components/footers/MiniCenteredFooter.js';
import { API_BASE_URL, BASE_URL } from '../config';
async function User() {
  let [nfts, setNft] = useState([]);

  return (
    <>
      {nfts ? (
        <PageMotion>
          {/* <Header /> */}
          {Object.keys(nfts).map((nft, index) => (
            <NFT
              key={index}
              heading={nfts[nft].title}
              creatorId={nfts[nft].creatorId}
              owned={nfts[nft].creatorName}
              offerPrice={nfts[nft].price}
              description={nfts[nft].summary}
            />
          ))}
          {/* <Footer /> */}
        </PageMotion>
      ) : (
        ''
      )}
    </>
  );
}
export default User;
