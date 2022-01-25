import React, { useEffect, useState } from 'react';
import { Injected } from './connectors';
import { useWeb3React } from '@web3-react/core';
import W3Connection from '../provider/';
import tw from 'twin.macro';

const PrimaryLink = tw.button`
  lg:mx-0
  px-8 py-3 rounded-full  bg-black text-gray-100 cursor-pointer
  focus:bg-black focus:text-white focus:outline-none
  border-b-0  font-bold hover:shadow-md 
`;

function MetamaskProvider({ account, roundedHeaderButton }) {
  const { active: networkActive, error: networkError, activate: activateNetwork } = useWeb3React();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Injected.isAuthorized()
      .then((isAuthorized) => {
        if (isAuthorized && !networkActive && !networkError) {
          activateNetwork(Injected);
        }
        if (networkActive) setLoaded(true);
      })
      .catch(() => {
        setLoaded(false);
      });
  }, [activateNetwork, networkActive, networkError]);
  if (loaded && account) {
    return <PrimaryLink css={roundedHeaderButton && tw`rounded-full`}>Connected</PrimaryLink>;
  }

  return (
    <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} onClick={() => W3Connection()}>
      Connect to Wallet
    </PrimaryLink>
  );
}

export default MetamaskProvider;
