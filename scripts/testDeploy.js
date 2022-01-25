const hre = require('hardhat');

const fs = require('fs');

const { join } = require('path');

require('dotenv').config({ path: './.env.production' });

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  console.log('Account balance:', (await deployer.getBalance()).toString());

  const NFTMinter = await hre.ethers.getContractFactory('CyberpopFactory');

  const nftMinter = await NFTMinter.deploy();

  await nftMinter.deployed();

  // await nftMinter.connect(deployer).transferOwnership(process.env.PUBLIC_KEY);

  console.log('Deployed to:', nftMinter.address);

  const data = {
    address: nftMinter.address,

    abi: JSON.parse(nftMinter.interface.format('json')),
  };

  fs.writeFileSync(join(__dirname, '../src/web3/CyberFactoryTest.json'), JSON.stringify(data));

  if (process.env.CHAIN_SCAN_TOKEN) {
    console.log('Verifying ze contract');

    await hre.run('verify:verify', {
      address: nftMinter.address,
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
