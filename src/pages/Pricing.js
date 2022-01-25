import React, { useState, useEffect } from 'react';
import {PageMotion} from 'layout/PageMotion.js';
import Header from 'components/headers/light.js';
// import Pricing from 'containers/features/TwoColSingleFeatureWithStats2.js';
// import TabGrid from 'components/cards/TabCardGrid.js';
import Footer from 'components/footers/MiniCenteredFooter.js';
import MainFeature from 'containers/pricingContainers/pricingInfo.js';
import { API_BASE_URL, BASE_URL } from '../config';
import { useParams } from 'react-router-dom';
import tw from 'twin.macro';
import { mintCyberPopToken } from '../web3/Web3Client';
import axios from 'axios';
import { LoaderSpin } from 'components/loader/loader';

// const Description = tw.span`inline-block mt-2 whitespace-pre-line`;

const CampaignPage = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState('');
  // const [nfts, setNfts] = useState('');
  // const [minted, setMinted] = useState(false);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const url = API_BASE_URL + '/campaign/' + id;

    (async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // setNfts(json.campaign.nfts);
        setCampaign(json);
        setLoaded(false);
      } catch (error) {
        setLoaded(false);

        console.log('error', error);
      }
    })();
  }, []);

  const mint = async (url, offerPrice, tokenId) => {
    console.log('Ipfs');
    console.log(url);
    const reqBody = {
      url: url,
    };
    try {
      const resp = await axios.post(`http://localhost:4000/fileRoute/uploadnft`, reqBody);

      console.log(resp);
      console.log(`uploadnft to ipfs respponse >> ${JSON.stringify(resp.data.data)}`);
      if (resp && resp.data && resp.data.data && resp.data.data.hasOwnProperty('IpfsHash')) {
        mintCyberPopToken(resp.data.data.IpfsHash, offerPrice, tokenId)
          .then((tx) => {
            console.log('Ipfs');
            console.log(tx);
            // setMinted(true);
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
      {loaded ? (
        <LoaderSpin />
      ) : (
        <PageMotion>
          {/* <Header /> */}
          {Object.keys(campaign).map((crt, index) => (
            <>
              <MainFeature
                key={index}
                id={campaign[crt].id}
                heading={campaign[crt].collect.collect[0].title}
                description={campaign[crt].collect.collect[0].summary}
                buttonRounded={false}
                textOnLeft={false}
                primaryButtonText="Join this project"
                videoSrc={BASE_URL + 'admin/campaign/' + campaign[crt].video}
                imageDecoratorBlob={true}
                imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
                generatorTitle={campaign[crt].art_engine ? campaign[crt].art_engine.title : ''}
                generatorSummary={campaign[crt].art_engine ? campaign[crt].art_engine.summary : ''}
                generatorSecondTitle={campaign[crt].art_engine ? campaign[crt].art_engine.random_title : ''}
                generatorSecondSummary={campaign[crt].art_engine ? campaign[crt].art_engine.random_summary : ''}
                generatorImage={campaign[crt].art_engine ? campaign[crt].art_engine.image : ''}
                campaignTitle={campaign[crt].collect ? campaign[crt].collect.collect[1].title : ''}
                campaignSummary={campaign[crt].collect ? campaign[crt].collect.collect[1].summary : ''}
                artContentTitle={campaign[crt].content ? campaign[crt].content.reward[0].title : ''}
                artContentSummary={campaign[crt].content ? campaign[crt].content.reward[0].summary : ''}
                mapTitle={campaign[crt].content ? campaign[crt].content.map[0].title : ''}
                mapSummary={campaign[crt].content ? campaign[crt].content.map[0].summary : ''}
                mainTitle={campaign[crt].element ? campaign[crt].element.title : ''}
                mainSubTitle={campaign[crt].element ? campaign[crt].element.sub_title : ''}
                mainDescription={campaign[crt].element ? campaign[crt].element.description : ''}
                mainPrice={campaign[crt].element ? campaign[crt].element.price : ''}
                mainToken={campaign[crt].element ? campaign[crt].element.token : ''}
                mainProjectId={campaign[crt].element ? campaign[crt].element.project_id : ''}
                slide={campaign[crt].slide ? campaign[crt].slide : ''}
                mintCyberPopToken={mint}
                minted
              />
            </>
          ))}
          {/* <Footer /> */}
        </PageMotion>
      )}
    </>
  );
};

export default CampaignPage;
