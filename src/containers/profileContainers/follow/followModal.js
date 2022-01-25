import React from 'react';
import { ModalPic } from 'constants/styles/joint';
import tw from 'twin.macro';
import { ImageNft, TxtSmall } from '../cardDetail';

const Container = tw.div`sm:w-2/4 w-full p-4 bg-white rounded max-h-screen overflow-hidden relative`;
const Content = tw.div` grid grid-cols-1 gap-1 z-30  items-start `;
const ContentIn = tw.div` flex flex-col w-full gap-1 z-30 overflow-y-scroll items-start h-80 items-start`;
const Title = tw.h5`py-4 px-2 leading-snug font-bold text-black text-lg`;
const Tab = tw.div` flex justify-between gap-2 w-full bg-gray-100 shadow-sm transition delay-100 hover:bg-white p-2 hover:shadow-md`;
const TabInfo = tw.div`flex items-center gap-4  px-2 `;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-2 mr-4 text-gray-500 hover:text-red-500 font-bold focus:text-red-500`;

const imagesrc =
  'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';
const Button = tw.button`px-4 py-2 bg-blue-500 text-white rounded
   font-bold tracking-wide shadow-lg uppercase text-sm transition
    duration-300 transform focus:outline-none  
      focus:shadow-xl`;

export const FollowModal = ({ open, setOpen, followData, userProfile, currentProfile, followAccount }) => {
  return (
    <Container>
      <CloseModalButton onClick={() => setOpen(false)}>X</CloseModalButton>
      <Title>Followers</Title>
      <ContentIn>
        {Object.values(followData.following).map((el) => (
          <>
            <FollowTab
              userProfile={userProfile}
              currentProfile={currentProfile}
              followAccount={followAccount}
              name={el.name}
            />
          </>
        ))}
      </ContentIn>
    </Container>
  );
};

export const FollowTab = ({ name, userProfile, currentProfile, followAccount }) => {
  return (
    <Tab>
      <TabInfo>
        <ImageNft src={imagesrc} alt="name" />
        <TxtSmall>{name}</TxtSmall>
      </TabInfo>
      <Button
        onClick={() => {
          followAccount({
            profile_address: currentProfile,

            follower_address: userProfile,
          });
        }}
      >
        Follow
      </Button>
    </Tab>
  );
};
