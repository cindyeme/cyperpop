// import NFTContractBuild from 'contracts/NFT.json';
import Web3 from 'web3';
import CyberPop from './CyberPop.json';
let selectedAccount;
let web3;
// let nftContract;
let cyberPopContract;

let isInitialized = false;
let maxMintable = '100';
let tokenPrice = '100000000000000000';

export const init = async () => {
  let provider = window.ethereum;

  if (typeof provider !== 'undefined') {
    provider
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        selectedAccount = accounts[0];
        console.log(`Selected account is ${selectedAccount}`);
      })
      .catch((err) => {
        console.log(err);
        return;
      });

    window.ethereum.on('accountsChanged', function (accounts) {
      selectedAccount = accounts[0];
      console.log(`Selected account changed to ${selectedAccount}`);
    });
  }

  web3 = new Web3(provider);
  // maxMintable = web3.eth.toHex(maxMintable);
  tokenPrice = Web3.utils.fromWei(tokenPrice);

  const networkId = await web3.eth.net.getId();

  // nftContract = new web3.eth.Contract(
  // 	NFTContractBuild.abi,
  // 	NFTContractBuild.networks[networkId].address
  // );

  cyberPopContract = new web3.eth.Contract(CyberPop.abi, `${process.env.REACT_APP_NEXT_PUBLIC_CONTRACT_ADDRESS}`);
  console.log(`Contract is address is >> ${process.env.REACT_APP_NEXT_PUBLIC_CONTRACT_ADDRESS} >> ${cyberPopContract}`);
  isInitialized = true;
};

export const mintCyberPopToken = async (tokenId) => {
  if (!isInitialized) {
    await init();
  }

  cyberPopContract.methods
    .mint(selectedAccount, 1, tokenId)
    .send({ from: selectedAccount, value: web3.utils.toWei('0.1') });
};
