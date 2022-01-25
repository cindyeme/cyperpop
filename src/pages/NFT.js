import React, { useState, useEffect } from 'react';
import {PageMotion} from 'layout/PageMotion.js';
import Header from 'components/headers/light.js';
// import Creator from "containers/features/ThreeColumnWithProfileImage.js";
import Footer from 'components/footers/MiniCenteredFooter.js';
import NFT from 'components/NFTSingleImage.js';
// import TabGrid from "components/cards/TabCardGrid.js";
import { API_BASE_URL, BASE_URL } from '../config';
import { useParams } from 'react-router-dom';
// import Web3 from "web3";
// import Web3Modal from "web3modal";
// import Contract from "contracts/465b43849df5a7424b3d4d38e981f41e.json";
import { mintCyberPopToken } from '../web3/Web3Client';
import axios from 'axios';

const NFTPage = () => {
  const { id } = useParams();
  const [nfts, setNft] = useState('');
  const [minted, setMinted] = useState(false);

  // useEffect(() => {
  //   loadWeb3();
  // }, []);
  useEffect(() => {
    const url = API_BASE_URL + '/nft/' + id;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        setNft(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  const mint = async (url, offerPrice) => {
    const reqBody = {
      url: url,
    };
    try {
      const resp = await axios.post(`http://54.179.91.185:4000/fileRoute/uploadnft`, reqBody);
      console.log(`uploadnft to ipfs respponse >> ${JSON.stringify(resp.data.data)}`);
      if (resp && resp.data && resp.data.data && resp.data.data.hasOwnProperty('IpfsHash')) {
        mintCyberPopToken(resp.data.data.IpfsHash, offerPrice)
          .then((tx) => {
            console.log(tx);
            setMinted(true);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  return (
    <>
      {nfts ? (
        <PageMotion>
          {Object.keys(nfts).map((nft, index) => (
            <NFT
              key={index}
              heading={nfts[nft].title}
              creatorId={nfts[nft].creatorId}
              owned={nfts[nft].creatorName}
              offerPrice={nfts[nft].price}
              description={nfts[nft].summary}
              videoSrc={BASE_URL + 'admin/nft/' + nfts[nft].video}
              mintCyberPopToken={mint}
              minted={minted}
            />
          ))}
        </PageMotion>
      ) : (
        ''
      )}
    </>
  );
};

export default NFTPage;
