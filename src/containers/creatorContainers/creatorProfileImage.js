import React, { useState } from 'react';
// import styled from 'styled-components';
import tw from 'twin.macro';
import Truncate from 'react-truncate';
// import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ReactComponent as CopyIcon } from 'feather-icons/dist/icons/copy.svg';
import { Alert, TYPE } from 'components/alert';
import { Address, Boxx, Boxxx, Copy, DateTag, ProfileNameInfo, ProfileName } from 'containers/profileContainers/profileContainer';
import avatar from 'assets/svg/avatar.svg';
// import coverSrc from 'assets/images/logo.png'
import { InPageSpin } from 'components/loader/loader';
import truncateMiddle from 'truncate-middle';

const Main = tw.div`bg-white bg-opacity-25 relative`;
const coverSrc =
  'https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80';
const ProfileImage = tw.img`w-32 h-32 md:w-40 md:h-40 md:ml-4  object-cover m-auto rounded-full border-8 border-white `;
const ProfileDiv = tw.div`  w-full grid grid-cols-1 justify-items-start justify-items-center items-center
 `;
const Header = tw.div`grid grid-cols-1 p-8 md:py-8 w-full items-center`;
const Container = tw.div`w-full lg:mx-auto mb-2 grid grid-cols-1  items-center`;
const ProfileInfo = tw.div` flex sm:flex-row flex-col  sm:items-start text-center justify-items-start items-center w-full sm:w-9/12`;
// const ProfileName = tw.h2`text-2xl text-white inline-block font-bold md:mr-2 sm:mb-2 mb-0`;
const Follow = tw.a`bg-white text-black static sm:absolute top-0 right-0 m-4 md:px-6 px-3 py-1 font-semibold text-sm rounded-full block text-center sm:inline-block block hover:bg-black hover:text-white`;

const ProfileDetail = tw.div`hidden md:flex space-x-8 mt-2 w-full items-center justify-center`;
const ProfileList = tw.div`grid grid-cols-1 justify-items-center`;
const Count = tw.p`font-bold text-sm text-white`;
const Text = tw.p`text-sm text-white`;
const ProfileDesc = tw.p`text-sm text-white  `;
const ProfileDescc = tw.p`text-base text-white text-sm mt-2`;

const Collection = tw.h1`text-2xl text-gray-900 sm:mt-8 mt-4 font-bold`;
const ProfileDetails = tw.div`grid grid-cols-1 gap-1  md:text-left justify-items-center sm:justify-items-start`;
const Div = tw.div`cursor-pointer`;

const CreatorProfileImage = ({ creator }) => {
  const [copied, setCopied] = useState(false);

  return (
    <>
      {creator ? (
        <Main>
          <Container>
            <Header
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${
                  creator.image ? creator.image : coverSrc
                })`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <Boxx>
                <ProfileDiv>
                  <ProfileImage src={creator.image ? creator.image : avatar} alt="profile" />
                  <ProfileDetail>
                    <ProfileList>
                      <Count>40.5k </Count>
                      <Text>followers</Text>
                    </ProfileList>

                    <ProfileList>
                      <Count>302 </Count>
                      <Text>following</Text>
                    </ProfileList>
                  </ProfileDetail>
                </ProfileDiv>
                <ProfileInfo>
                  <ProfileDetails>
                    <Boxx>
                      <ProfileNameInfo>

                      <ProfileName>{creator?.name}</ProfileName>
                        <ProfileDesc>@nftUsername</ProfileDesc>
                         <DateTag>Joined December 21</DateTag>
                      </ProfileNameInfo>
                      <Follow href="#">Follow</Follow>
                    </Boxx>
                    <div>
                      <Boxxx>
                        <Address>{truncateMiddle(creator?.address, 6, 4, '...')}</Address>

                        <CopyToClipboard
                          text={creator?.address}
                          onCopy={() => {
                            setCopied(true);
                            Alert('Copied successfully', TYPE.SUCCESS, { position: 'top-center' });
                          }}
                        >
                          <Copy copied={copied}>
                            <CopyIcon tw="w-4 h-4" />
                          </Copy>
                        </CopyToClipboard>
                      </Boxxx>
                     
                    </div>
                    <ProfileDescc>{creator?.bio}</ProfileDescc>
                  </ProfileDetails>
                </ProfileInfo>
              </Boxx>
            </Header>
            <Collection>Collections</Collection>
          </Container>
        </Main>
      ) : (
        <InPageSpin />
      )}
    </>
  );
};

export default CreatorProfileImage;
