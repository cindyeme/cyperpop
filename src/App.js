import 'tailwindcss/dist/base.css';
import 'constants/styles/globalStyles.css';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Index from 'pages/MainLandingPage';
import NFTPage from 'pages/NFT';
import CampaignPage from 'pages/Pricing';
import CampaignDetailPage from 'pages/Campaign';
import CreatorPage from 'pages/Creator';
import NFTCreate from 'pages/NFTCreate';
import Profile from 'pages/Profile';
import User from 'pages/User';
import { userAuth, contractInstance } from './store/components/users/auth';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
// import { css } from 'styled-components/macro'; //eslint-disable-line
import CardDetailsPage from 'pages/cardDetailPage';
import Web3 from 'web3';
import CyberPop from './web3/CyberPop.json';

import { ErrorPage } from 'containers/staticPages/staticPages';
// import { PageMotion } from 'layout/PageMotion';
// import Header from 'components/headers/light.js';
// import Footer from 'components/footers/MiniCenteredFooter';
import ScrollToTop from 'constants/scrollToTop';
import NewProfile from 'pages/NewProfile';
import CreateNft from 'pages/create-nft';
import MarketPlace from './pages/Marketplace';
import NewCampaignDetails from 'pages/campaignDetails';
import Campaign from 'pages/newCampaign';
import CreateCampaign from 'pages/create-campaign';
import Creators from 'pages/Creators';
import EditProfile from 'pages/edit-profile';
import Create from 'pages/create';
import CreateCollections from 'pages/create-collections';

const App = ({ Contract, authenticate }) => {
  const [acct, setAcct] = React.useState();
  useEffect(() => {
    (async () => {
      let provider = window.ethereum;

      let account;

      if (typeof provider !== 'undefined') {
        provider
          .request({ method: 'eth_requestAccounts' })
          .then((accounts) => {
            account = accounts[0];

            let authedAcct = new Web3(provider);
            authenticate({
              provider: authedAcct,

              account,

              contract: new authedAcct.eth.Contract(
                CyberPop.abi,
                `${process.env.REACT_APP_NEXT_PUBLIC_CONTRACT_ADDRESS}`
              ),
            });

            console.log(`Selected account is ${account}`);
            setAcct(account);
          })
          .catch((err) => {
            console.log(err);
            alert('Please Install A Wallet Provider');
            return;
          });

        window.ethereum.on('accountsChanged', function (accounts) {
          let authedAcct = new Web3(provider);

          account = accounts[0];

          authenticate({
            provider: authedAcct,

            account,

            contract: new authedAcct.eth.Contract(
              CyberPop.abi,
              `${process.env.REACT_APP_NEXT_PUBLIC_CONTRACT_ADDRESS}`
            ),
          });
          setAcct(account);
          console.log(`Selected account changed to ${account}`);
        });
      } else {
        console.log('Please Install A Wallet Provider');
      }
    })();
  }, [authenticate]);
  return (
    <>
      <ToastContainer />
      {/* <Header/> */}
      {/* <PageMotion> */}
      <ScrollToTop />
      <Switch>
        <Route path="/create">
          <Create />
          {/* <NFTCreate /> */}
        </Route>
        <Route path="/creator/:id">
          <CreatorPage Contract={Contract} />
        </Route>
        <Route path="/nft-info/:id">
          <CardDetailsPage />
        </Route>
        <Route path="/campaign/:id">
          <CampaignPage />
        </Route>
        <Route path="/campaignpage/:id">
          <CampaignDetailPage />
        </Route>
        <Route path="/nft/:id">
          <NFTPage />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/creators">
          <Creators />
        </Route>
        <Route path="/new-profile">
          <NewProfile />
        </Route>
        <Route path="/edit-profile">
          <EditProfile />
        </Route>
        <Route path="/create-nft">
          <CreateNft />
        </Route>
        <Route path="/marketplace">
          <MarketPlace />
        </Route>
        <Route path="/campaign">
          <Campaign />
        </Route>
        <Route path="/campaign-details">
          <NewCampaignDetails />
        </Route>
        <Route path="/create-collections">
          <CreateCollections />
        </Route>
        <Route path="/create-campaign">
          <CreateCampaign />
        </Route>
        <Route path="/profile/:id">
          <Profile Contract={Contract} acct={acct} />
        </Route>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
        <Redirect to="*" />
      </Switch>
      {/* <Footer/> */}
      {/* </PageMotion> */}
    </>
  );
};

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  authenticate: (data) => dispatch(userAuth(data)),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  // loadState: selectAppLoadState,
  Contract: contractInstance,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
