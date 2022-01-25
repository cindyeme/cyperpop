import React, { useState, useEffect } from 'react';
import { Main } from 'layout/PageMotion.js';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  userEdit,
  getUser,
  currentProfile,
  userEditPic,
  followUser,
  unfollowUser,
} from '../store/components/users/auth';

// import NFTSingleImage from 'containers/features/NFTSingleImage.js';
import ProfileContainer from 'containers/profileContainers/profileContainer.js';
// import { API_BASE_URL, BASE_URL } from '../config';
import Header from 'components/headers/light.js';
// import axios from 'axios';
import ProfileGrid from 'containers/profileContainers/ProfileGrid';
import Footer from 'components/footers/MiniCenteredFooter.js';
import { useParams } from 'react-router-dom';
import { userRegister } from '../store/components/users/auth';
import { LoaderSpin } from 'components/loader/loader';
import { AccountNotFound, NoArt, Unauthorized } from 'containers/staticPages/staticPages';
import { Alert, TYPE } from 'components/alert';
import { useLocation } from 'react-router-dom';

const Profile = ({
  acct,
  Contract,
  createAccount,
  profile,
  editAccount,
  editAccountPic,
  getAccount,
  followAccount,
}) => {
  const location = useLocation();
  const url = location.pathname;
  console.log(`the main acct ${acct}`);
  const { id } = useParams();
  const [loaded, isLoaded] = useState(true);

  let [nftData, setnftData] = useState([]);

  useEffect(() => {
    getAccount({
      address: id,
    });
    isLoaded(false);
    createAccount({
      address: id,
    });
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await Contract.methods
          .walletOfOwner(id)
          .call()
          .then((data) => {
            data.map((nft) => {
              fetch(`https://gateway.pinata.cloud/ipfs/QmcZMyw1EikNKti95SoXpDeqCwMP3DDUD5KZB6WudkUQ2Y/${nft}.json`)
                .then((response) => response.json())
                .then((data) => {
                  setnftData((prev) => [...prev, data]);
                })
                .catch((err) => {
                  console.error(err);
                });
            });
          });
      } catch (err) {
        profile === null ||
          (profile.address === null && Alert('Connect to wallet', TYPE.FAILED, { position: 'top-center' }));
      }
    })();
  }, [Contract]);
  return (
    <div>
      {/* <Header /> */}
      {loaded ? (
        <LoaderSpin />
      ) : (
        <>
          {profile ? (
            <>
             <Header />
                <ProfileContainer
                  currentProfile={profile.address}
                  followAccount={followAccount}
                  profile={profile}
                  editAccountPic={editAccountPic}
                  editAccount={editAccount}
                  url={url}
                  acct={acct}
                  />
                  <Main>
                <div>
                  <ProfileGrid currentProfile={id} nftData={nftData} url={url} acct={acct} />
                </div>
              </Main>
               <Footer />
            </>
          ) : (
            ''
          )}
        </>
      )}
      {/* <Footer /> */}
    </div>
  );
};

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  profile: currentProfile,
});

//send dispatch action to component props
const mapDispatchToProps = (dispatch) => ({
  followAccount: (user) => dispatch(followUser(user)),

  createAccount: (user) => dispatch(userRegister(user)),

  editAccount: (user) => dispatch(userEdit(user)),

  editAccountPic: (user) => dispatch(userEditPic(user)),

  getAccount: (user) => dispatch(getUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
