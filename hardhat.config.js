require('dotenv').config({ path: './.env.local' });
require('@nomiclabs/hardhat-ethers');
const fs = require('fs');

const privateKey = fs.readFileSync('.secret').toString().trim();

if (process.env.CHAIN_SCAN_TOKEN) {
  require('@nomiclabs/hardhat-etherscan');
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },

  paths: {
    artifacts: './artifacts',
  },

  networks: {
    hardhat: {
      chainId: 80001,
    },
    mainnet: {
      url: process.env.NETWORK_RPC,
      accounts: [privateKey],
    },
    testnet: {
      // url: `https://rpc.testnet.fantom.network/`,
      url: `https://rpc-mumbai.maticvigil.com/`,
      accounts: [privateKey],
    },
  },

  etherscan: {
    apiKey: process.env.CHAIN_SCAN_TOKEN,
  },
};
