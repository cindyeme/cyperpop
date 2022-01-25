import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import truncateMiddle from 'truncate-middle';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BASE_URL } from '../../config';
// import ReactModalAdapter from '../../layout/ReactModalAdapter';
import ProfileModal from 'containers/profileContainers/editModal.js';
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg';
import { ReactComponent as CopyIcon } from 'feather-icons/dist/icons/copy.svg';
import { ReactComponent as CameraIcon } from 'feather-icons/dist/icons/camera.svg';
import { Alert, TYPE } from 'components/alert';
import avatar from 'assets/svg/avatar.svg';
// import coverSrc from 'assets/images/logo.png';
import { In, Modal, ModalPic } from 'constants/styles/joint';
import { UploadCover, UploadProfile } from './upload';
import { FollowModal } from './follow/followModal';
import { Unauthorized } from 'containers/staticPages/staticPages';

const Main = tw.div`bg-white bg-opacity-25 font-display`;
const coverSrc =
  'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';
const ProfileImage = tw.img`w-32 h-32 md:w-40 md:h-40   object-cover m-auto rounded-full border-8 border-white `;
const ProfileDiv = tw.div`  w-full grid grid-cols-1 justify-center items-center justify-items-center
 `;
const Header = tw.div`grid grid-cols-1 p-8 md:p-8 w-full items-center `;
const Container = tw.div`w-full lg:mx-auto mb-2 grid grid-cols-1  items-center relative`;
const CoverChange = tw.div` absolute bottom-0 right-0 mb-20 mr-4`;
const ProfileInfoDiv = tw.div`w-full  `;
const ProfileInfo = tw.div` flex sm:flex-row flex-col  sm:items-start items-center text-center justify-items-start w-full sm:w-9/12 `;
export const ProfileName = tw.h2`leading-none text-xl text-white inline-block capitalize font-bold md:mr-2 `;
const Follow = tw.button`bg-white text-black static sm:absolute top-0 right-0 m-4 md:px-6 px-3 py-1 font-semibold text-sm rounded-full block text-center sm:inline-block block hover:bg-black hover:text-white`;
const EditProfile = tw(
  Link
)`bg-white text-black mt-2 md:px-6 px-3  py-2  font-semibold sm:text-sm text-xs rounded-full  text-center  hover:bg-black hover:text-white`;
const ProfileDetail = tw.div`hidden md:flex gap-3 mt-2 w-full items-center justify-center`;
const ProfileList = tw.div`grid grid-cols-1 justify-items-center`;
const Count = tw.p`font-bold text-sm text-white`;
const Text = tw.p`text-sm text-white`;
export const ProfileDesc = tw.p`leading-none text-sm text-white  `;
export const DateTag = tw.p` text-base text-gray-400 text-xs font-bold my-1`;
const ProfileDescc = tw.p`text-base text-white text-sm mt-2`;
export const Address = tw.p`text-base text-gray-800 font-bold text-sm `;
const ContainerJoin = tw.div`grid grid-cols-1 w-32 h-32 md:w-40 md:h-40 relative `;
export const UploadBtn = tw.button`bg-white text-gray-700  p-2  font-semibold sm:text-sm text-xs rounded-full  text-center  hover:bg-gray-900 hover:text-white`;
export const FollowBtn = tw.button`focus:outline-none text-center`;
const FlexContainer = tw.div`flex items-center justify-between flex-wrap space-y-2`;
const AddBtn = tw.button`bg-black text-base focus:outline-none rounded text-white px-4 py-2 font-bold font-display`;

export const Boxx = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1rem;
  align-content: center;
  align-items: center;
  @media (max-width: 637px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    width: 100%;
  }
`;
export const Boxxx = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: start;
  background: #fff;
  padding: 0.4rem 0.7rem;
  justify-content: space-between;
  border-radius: 10rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  }
  @media (max-width: 637px) {
    display: flex;
    justify-content: center;
  }
`;
export const Copy = tw.button`focus:outline-none mr-4 text-center w-full cursor-pointer text-gray-700 hover:text-gray-800 text-xs h-4 w-4`;

const CloseModalButton = tw.button`fixed top-0 right-0 mt-2 mr-8
  text-white focus:text-red-500`;
export const Collection = tw.h1`sm:px-8 px-4 text-2xl text-gray-900 sm:mt-8 mt-4 font-bold`;
export const ProfileDetails = tw.div`grid grid-cols-1 gap-1  md:text-left justify-items-center sm:justify-items-start`;
export const ProfileNameInfo = tw.div`grid  grid-cols-1`;

export default ({ acct, url, profile, editAccount, editAccountPic, currentProfile, followAccount }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [modalIsOpenPic, setModalIsOpenPic] = useState(false);

  const [modalIsOpenCover, setModalIsOpenCover] = useState(false);

  const [copied, setCopied] = useState(false);

  const [userAvatar, setAvatar] = useState({});

  const [userCover, setCover] = useState({});

  const [open, setOpen] = useState(false);

  const profileImage = profile?.profile_photo ? `${BASE_URL}/admin/profile/${profile?.profile_photo}` : undefined;

  const coverImage = profile?.cover_photo ? `${BASE_URL}admin/profile/${profile?.cover_photo}` : undefined;

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const toggleModalPic = () => setModalIsOpenPic(!modalIsOpenPic);

  const toggleModalCover = () => setModalIsOpenCover(!modalIsOpenCover);

  const toggleFollowModal = () => setOpen(!open);
  return (
    <Main>
      {`/profile/${acct}` === url ? (
        <Container>
          {/* alert */}
          {/* <ModalPic visible={open}>
        
        <SuccessCard setOpen={setOpen}/>
        </ModalPic> */}
          {/* //  change cover picture */}
          {`/profile/${acct}` === url ? (
            <CoverChange>
              <UploadBtn onClick={toggleModalCover}>
                <CameraIcon tw="w-6 h-6 hover:text-white text-gray-700" />
              </UploadBtn>

              <ModalPic visible={modalIsOpenCover}>
                <UploadCover
                  address={profile?.address}
                  image={userCover}
                  editAccountPic={editAccountPic}
                  setImage={setCover}
                  setModalIsOpenCover={setModalIsOpenCover}
                />
              </ModalPic>
            </CoverChange>
          ) : (
            ''
          )}
          <Header
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${
                userCover?.source || encodeURI(coverImage) || coverSrc
              })`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <Boxx>
              <ProfileDiv>
                <ContainerJoin>
                  {/* // change profile picture */}
                  {`/profile/${acct}` === url ? (
                    <In>
                      <UploadBtn onClick={toggleModalPic}>
                        <CameraIcon tw="w-6 h-6 hover:text-white text-gray-800" />
                      </UploadBtn>

                      <ModalPic visible={modalIsOpenPic}>
                        <UploadProfile
                          address={profile?.address}
                          image={userAvatar}
                          setImage={setAvatar}
                          editAccountPic={editAccountPic}
                          setModalIsOpenPic={setModalIsOpenPic}
                        />
                      </ModalPic>
                    </In>
                  ) : (
                    ''
                  )}

                  <ProfileImage src={userAvatar?.source || profileImage || avatar} alt="profile" />
                </ContainerJoin>
                {/* <ProfileImage
                src={profile?.profile_photo ? `{${BASE_URL}/admin/profile/${profile?.profile_photo}}` : avatar}
                alt="profile"
              /> */}
                <ProfileDetail>
                  <ModalPic visible={open}>
                    <FollowModal
                      userProfile={profile?.address}
                      currentProfile={currentProfile}
                      followAccount={followAccount}
                      setOpen={setOpen}
                      open={open}
                      followData={followers}
                    />
                  </ModalPic>
                  <FollowBtn onClick={toggleFollowModal}>
                    <ProfileList>
                      <Count>40.5k </Count>
                      <Text>followers</Text>
                    </ProfileList>
                  </FollowBtn>
                  <FollowBtn onClick={toggleFollowModal}>
                    <ProfileList>
                      <Count>302 </Count>
                      <Text>following</Text>
                    </ProfileList>
                  </FollowBtn>
                </ProfileDetail>
              </ProfileDiv>
              <ProfileInfoDiv>
                <ProfileInfo>
                  <ProfileDetails>
                    <Boxx>
                      <ProfileNameInfo>
                        <ProfileName>{profile?.name}</ProfileName>
                        <ProfileDesc>@{profile?.username || 'username'}</ProfileDesc>
                        <DateTag>{new Date(profile?.created_at || Date.now()).toUTCString()}</DateTag>
                      </ProfileNameInfo>
                      {`/profile/${acct}` === url ? (
                        ''
                      ) : (
                        <Follow
                          onClick={() => {
                            followAccount({
                              profile_address: currentProfile,

                              follower_address: profile?.address,
                            });
                          }}
                        >
                          Follow
                        </Follow>
                      )}
                    </Boxx>
                    <div>
                      <Boxxx>
                        <Address>{truncateMiddle(profile?.address || 'address', 6, 4, '...')}</Address>

                        <CopyToClipboard
                          text={profile?.address}
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
                    <ProfileDescc>{profile?.bio}</ProfileDescc>

                    {`/profile/${acct}` === url ? (
                      <EditProfile onClick={toggleModal} to="#">
                        Edit Profile
                      </EditProfile>
                    ) : (
                      ''
                    )}
                  </ProfileDetails>

                  <Modal
                    visible={modalIsOpen}
                    // closeTimeoutMS={300}
                    // className="mainHeroModal"
                    // isOpen={modalIsOpen}
                    // onRequestClose={toggleModal}
                    // shouldCloseOnOverlayClick={true}
                  >
                    <CloseModalButton onClick={toggleModal}>
                      <CloseIcon tw="w-6 h-6 text-white" />
                    </CloseModalButton>

                    <ProfileModal profile={profile} editAccount={editAccount} setModalIsOpen={setModalIsOpen} />
                  </Modal>
                </ProfileInfo>
              </ProfileInfoDiv>
            </Boxx>
          </Header>
          <FlexContainer>
            <Collection>Collections</Collection>
            <AddBtn>
              <span className="fa fa-plus text-lg" /> Add More
            </AddBtn>
          </FlexContainer>
        </Container>
      ) : (
        <Unauthorized />
      )}
    </Main>
  );
};

const followers = {
  followers: {
    0: {
      id: 5,
      name: 'Krishnan R',
      username: 'KrishnanR',
      bio: null,
      email: 'krishnansmart17@gmail.com',
      address: '0xba86565258b7Fe46218649fDDd78CF699c837A2D1',
      profile_photo: '0xba86565258b7Fe46218649fDDd78CF699c837A2D11639393836_image 4 (1).png',
      cover_photo: '0xba86565258b7Fe46218649fDDd78CF699c837A2D11639393836_iStock-1187340724 1.png',
      status: 'active',
      created_at: '2021-12-13T11:08:54.000000Z',
      updated_at: '2021-12-13T11:10:36.000000Z',
    },
    1: {
      id: 3,
      name: 'Krishnan R',
      username: 'KrishnanR',
      bio: null,
      email: 'krishnansmart17@gmail.com',
      address: '12344567',
      profile_photo: '123445671639386729_image 4.png',
      cover_photo: '123445671639386729_image 7.png',
      status: 'active',
      created_at: '2021-12-13T09:11:35.000000Z',
      updated_at: '2021-12-13T09:12:09.000000Z',
    },
  },
  following: {
    0: {
      id: 6,
      name: 'Krishnan R',
      username: 'Krishnan R',
      bio: 'dawdcawcaec',
      email: null,
      address: '0x4fD487aa244c95cf5E7556fb007e7dC69Aba4abCsd',
      profile_photo: '1639566219_head2.png',
      cover_photo: null,
      status: 'inactive',
      created_at: '2021-12-15T11:03:39.000000Z',
      updated_at: '2021-12-15T11:03:39.000000Z',
    },
    1: {
      id: 6,
      name: 'Krishnan R',
      username: 'Krishnan R',
      bio: 'dawdcawcaec',
      email: null,
      address: '0x4fD487aa244c95cf5E7556fb007e7dC69Aba4abCsd',
      profile_photo: '1639566219_head2.png',
      cover_photo: null,
      status: 'inactive',
      created_at: '2021-12-15T11:03:39.000000Z',
      updated_at: '2021-12-15T11:03:39.000000Z',
    },
  },
};

console.log(Object.entries(followers));
