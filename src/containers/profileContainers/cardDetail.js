import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';
import { API_BASE_URL } from '../../config';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link as CreatorLink } from 'react-router-dom';

const Main = tw.div`bg-white grid grid-cols-1 gap-1`;
const CardDisplay = tw.div` grid grid-cols-1 gap-1 items-center justify-items-center h-80 bg-gray-100`;
const CardDetails = tw.div` grid grid-cols-1 gap-1 sm:py-12  py-8`;
const CardMoreDetails = tw.div` grid sm:grid-cols-2 grid-cols-1 gap-8 mt-6`;
const DivTwo = tw.div`flex flex-wrap sm:gap-12 gap-8 items-start`;
const Tab = tw.div`grid grid-cols-1 gap-2 items-start `;
const TabInfo = tw.div`flex items-center gap-4 shadow-md hover:translate-x-4 py-2 pl-3 pr-6 rounded-full`;
const CreatorDetails = tw.div` grid grid-cols-1 gap-1 sm:py-12  py-8`;
const CreatorDetail = tw.div` grid grid-cols-1 gap-1  `;
export const ImageNft = tw.img`w-8 h-8 rounded object-cover m-auto `;
const ImageRounded = tw.img`w-8 h-8 rounded object-cover rounded-full m-auto `;
const HeadingGray = tw.p` text-sm font-bold text-gray-600`;
export const TxtSmall = tw.p` sm:text-base text-sm font-bold text-gray-900`;
const Amount = tw.h1` sm:text-4xl text-xl font-bold text-gray-900`;
const Name = tw.h1`text-xl sm:text-5xl font-bold text-gray-900`;
const CreatorTab = tw.div`flex gap-2  justify-items-start items-center`;
const CreatorName = tw.h1`text-xl sm:text-2xl font-bold text-gray-900`;
const CreatorUserName = tw.h1`text-base sm:text-xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-700 via-pink-500 to-blue-500`;
const CreatorImageRounded = tw.img`w-20 h-20 rounded object-cover rounded-full`;
const Image = tw.img` w-80 h-80 py-8 object-contain`;
const Hr = tw.hr`text-black w-full py-2`;
const Link = tw.a`hover:text-black flex gap-2 my-2  `;

const imagesrc =
  'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

const CardDetail = ({ detail }) => {
  // const [creator, setCreator] = useState('');

  // const [loaded, isLoaded] = useState(true);

  const [tokenData, setTokenData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [details, setDetails] = useState(true);

  useEffect(() => {
    if (detail?.currentProfile) {
      (async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/get/token/address`, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              address: detail?.currentProfile,
            }),
            method: 'POST',
          });

          const json = await response.json();
          // setNfts(json.campaign.nfts);
          setTokenData(json);
        } catch (error) {
          console.log('error', error);
        }
      })();
    }
  }, [detail?.currentProfile]);

  useEffect(() => {
    (async () => {
      try {
        let currToken = tokenData?.token?.filter((el) => parseInt(el.token) === detail.edition)[0];

        const response = await fetch(`${API_BASE_URL}/get/mint/address`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: detail?.edition,

            project_id: currToken?.project_id ? currToken?.project_id : detail?.ProjectId,
          }),
          method: 'POST',
        });

        const json = await response.json();
        // setNfts(json.campaign.nfts);
        setDetails(json);

        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.log('error', error);
      }
    })();
  }, [detail?.ProjectId, detail?.currentProfile, detail.edition, tokenData?.token]);

  console.log(detail, details, tokenData);

  return (
    <Main>
      {/* card display */}
      <CardDisplay>
        <Image src={detail?.image} alt={detail?.image} />
      </CardDisplay>
      {/* card details */}
      <CardDetails>
        <Name>{detail?.name || 'Name'}</Name>
        {/* minted date */}
        <HeadingGray>
          {details?.created_at ? `Minited on ${new Date(details?.created_at).toISOString()}` : 'NOT MINTED YET'}
        </HeadingGray>
        <CardMoreDetails>
          <DivTwo>
            <Tab>
              <HeadingGray> Created By</HeadingGray>
              <TabInfo>
                <ImageRounded src={imagesrc} alt={detail?.creator} />
                <TxtSmall>@{details?.creator_name || 'Creator Name'}</TxtSmall>
              </TabInfo>
            </Tab>

            <Tab>
              <HeadingGray>Collection</HeadingGray>
              <TabInfo>
                <ImageNft src={imagesrc} alt={detail?.name || 'Name'} />
                <TxtSmall>{details?.collection_name}</TxtSmall>
              </TabInfo>
            </Tab>
          </DivTwo>
          <DivTwo>
            <Tab>
              <HeadingGray>Sold For</HeadingGray>

              <Amount>{details?.price} Eth</Amount>
              {/* <HeadingGray>$1,230</HeadingGray> */}
            </Tab>

            <Tab>
              <HeadingGray>Owned By</HeadingGray>
              <TabInfo>
                <ImageRounded src={detail?.image} alt={detail?.dna} />
                <TxtSmall
                  as={details?.address || detail?.currentProfile ? 'a' : 'p'}
                  href={`/profile/${detail?.address}`}
                >
                  {details?.address ? `@${details?.address}` : '*NOT MINTED YET*'}
                </TxtSmall>
              </TabInfo>
            </Tab>
          </DivTwo>
        </CardMoreDetails>
      </CardDetails>
      {/* external links */}
      <Tab>
        <Amount>Details</Amount>
        <Hr />
        <CreatorDetail>
          {details?.hash ? (
            <Link href={`https://mumbai.polygonscan.com/tx/${details?.hash}`}>
              target="_blank"
              <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.364 9.999a.89.89 0 01.895-.89l1.482.004a.891.891 0 01.891.892v5.607c.167-.05.381-.102.616-.157a.743.743 0 00.572-.723V7.776a.892.892 0 01.892-.892h1.485a.891.891 0 01.891.892v6.456s.372-.15.734-.304a.744.744 0 00.454-.685V5.547a.891.891 0 01.892-.891h1.485a.891.891 0 01.891.891v6.337c1.288-.933 2.593-2.056 3.628-3.406A1.496 1.496 0 0020.4 7.08 10.483 10.483 0 0010.632 0C4.811-.077 0 4.677 0 10.501a10.47 10.47 0 001.394 5.252 1.327 1.327 0 001.266.656c.28-.024.63-.06 1.046-.108a.742.742 0 00.659-.737V9.999M4.332 18.991a10.493 10.493 0 0016.641-9.21c-3.834 5.721-10.915 8.396-16.64 9.21"
                  fill="currentColor"
                ></path>
              </svg>
              View on Polygonscan
            </Link>
          ) : (
            ''
          )}
          <Link
            target="_blank"
            href={`https://gateway.pinata.cloud/ipfs/QmeHfNzKbHv8jxNyZxUMDa5M6xKAoDjJUHZR7ELeAAXe9Z/${
              detail?.edition || detail?.Token
            }.json`}
          >
            <svg width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.21 5.222L10.639.936a1.428 1.428 0 00-1.279 0L.789 5.222A1.431 1.431 0 000 6.5v10c0 .54.306 1.035.79 1.278l8.571 4.286a1.43 1.43 0 001.278 0l8.571-4.286A1.43 1.43 0 0020 16.5v-10a1.43 1.43 0 00-.79-1.278zM10 3.812L15.377 6.5 10 9.189 4.623 6.501 10 3.81zm-7.143 5l5.714 2.857v6.806l-5.714-2.857V8.812zm8.572 9.663v-6.806l5.714-2.857v6.806l-5.714 2.857z"
                fill="currentColor"
              ></path>
            </svg>
            View metadata
          </Link>
        </CreatorDetail>
      </Tab>
      {/* creator  */}
      <CreatorDetails>
        <Amount>Creator</Amount>
        <Hr />
        <CreatorLink to={`/creator/${detail?.creator}`}>
          <CreatorTab>
            <CreatorImageRounded src={imagesrc} alt={detail?.dna} />
            <CreatorDetail>
              <CreatorName>{details.creator_name}</CreatorName>
              <CreatorUserName>@{details.creator_name}</CreatorUserName>
            </CreatorDetail>
          </CreatorTab>
        </CreatorLink>
        <TxtSmall>{detail?.description}</TxtSmall>
      </CreatorDetails>
    </Main>
  );
};

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  // nft: currentNFT,
  //
  // campaign: currentCampaign,
});

//send dispatch action to component props
const mapDispatchToProps = (dispatch) => ({
  // getNFT: (user) => dispatch(userRegister(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);
