import Web3 from 'web3';

import CyberPop from '../../web3/CyberPop.json';

const W3Connection = async () => {
  let provider = window.ethereum;

  let account;

  if (typeof provider !== 'undefined') {
    provider
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        account = accounts[0];

        console.log(`Selected account is ${account}`);
      })
      .catch((err) => {
        
        return;
      });

    window.ethereum.on('accountsChanged', function (accounts) {
      account = accounts[0];
      console.log(`Selected account changed to ${account}`);
    });
  } else {
    alert('MetaMask is not available');
    
  }

  let authedAcct = new Web3(provider);

  account = await authedAcct.currentProvider.selectedAddress;

  return {
    provider: authedAcct,

    account,

    contract: new authedAcct.eth.Contract(CyberPop.abi, `${process.env.REACT_APP_NEXT_PUBLIC_CONTRACT_ADDRESS}`),
  };
};

export default W3Connection;
