import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import truncate from 'truncate';
import tw from 'twin.macro';
import styled from 'styled-components';
import avatar from '../../assets/images/avatar_11.png';
import bg from '../../assets/images/bg.png';
import { FlexCol } from '../createNFT';
// import MoreButton from "../../components/button/More";
// import ShareButton from "../../components/button/Share";

const BsText = tw.h2`text-white font-display font-bold tracking-wider sm:text-xl text-lg`;
const Copy = tw.button`focus:outline-none text-center bg-gray-700 cursor-pointer text-white px-4 py-2 hover:text-gray-200 text-base `;
const ProfileImage = tw.img`h-32 w-32 rounded-full border-4 border-gray-800 transform -translate-y-3`;
export const Wrap = tw.div`pb-64 pt-8`;
export const Nav = tw.div`bg-white rounded-full border px-5 py-2 text-sm font-semibold inline-flex items-center space-x-3`;
const EditProfile = tw(
  Link
)`bg-white text-black md:px-6 px-3 py-2 font-semibold font-display text-base text-center  hover:bg-opacity-75 hover:text-white transition duration-300 ease-linear`;
const BgBlack = tw.div`bg-black`;
const Header = tw.div`grid grid-cols-1 p-0 m-0 w-full items-center `;
const FlexWrap = tw.div`flex md:flex-row flex-col  justify-between  items-center`;
const FlexRow = tw.div`flex items-center space-x-6`;
const Aside = tw.div`flex  md:flex-row text-center md:text-left space-y-4 md:space-y-0 flex-col space-x-4  items-center`;
const ResFlex = tw.div`flex py-4 md:py-0 space-x-3 space-y-2 sm:space-y-0 sm:space-x-4 flex-wrap items-center justify-center`;
const Span = tw.span`text-gray-600`;
const Clone = tw.button`text-gray-300 ml-3  focus:outline-none`;
export const SmText = tw.p`text-gray-600 text-sm font-display text-center`;

export const Wrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1400px) {
    max-width: 1400px;
  }
  @media screen and (max-width: 768px) {
    max-width: 800px !important;
  }
  @media screen and (max-width: 1400px) {
    max-width: 1200px;
  }
  @media only screen and (min-width: 1510px) {
    max-width: 1400px;
  }
`;

export const WalletAddress = ({ address }) => {
  const [copied, setCopied] = useState(false);
  return (
    <Copy>
      {copied ? <span>Copied!!</span> : <>{truncate(address, 10)}</>}
      <CopyToClipboard text={'address'} onCopy={() => setCopied(!copied)}>
        <Clone>
          <span className="fa fa-clone" />
        </Clone>
      </CopyToClipboard>
    </Copy>
  );
}
const ProfileHeader = ({ name, address, fflwers, fflwing }) => {
  
  return (
    <Header
      style={{
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      {/* cover pictures  */}
      <Wrapper>
        <Wrap>
          <Nav>
            <Link to="/">Home</Link>
            <span className="fa fa-angle-right" />
            <Span>Profile</Span>
          </Nav>
        </Wrap>
      </Wrapper>
      {/* bio details */}
      <BgBlack>
        <Wrapper>
          <FlexWrap>
            <Aside>
              <ProfileImage src={avatar} alt="profile avatar" />
              <FlexCol>
                <BsText>{name}</BsText>
                <FlexRow>
                  <SmText>
                    {fflwers} <br /> followers
                  </SmText>
                  <SmText>
                    {fflwing} <br /> following
                  </SmText>
                </FlexRow>
              </FlexCol>
            </Aside>
            <ResFlex>
              <WalletAddress address={address} />
              <EditProfile to="/edit-profile">Edit Profile</EditProfile>

              {/* <ShareButton />
            <MoreButton to="/report" /> */}
            </ResFlex>
          </FlexWrap>
        </Wrapper>
      </BgBlack>
    </Header>
  );
};

export default ProfileHeader;
