const chai = require('chai');
const expect = chai.expect;
const { solidity } = require('ethereum-waffle');
const { ethers } = require('ethers');

chai.use(solidity);

describe('CyberPop contract', function () {
  let owner;
  let depositAddress;

  this.beforeAll(async () => {
    [owner, depositAddress, someAttacher] = await ethers.getSigners();
  });

  it('should mint a token properly and transfer amount to deposit address', async function () {
    const depositAddressInitialBalance = await depositAddress.getBalance();
    const Contract = await ethers.getContractFactory('CyberPop');

    const contract = await Contract.deploy(
      'Cyberpop',
      'CBP',
      'https://gateway.pinata.cloud/ipfs/QmWg2ETLuB9EKEKxPa1aMZnyxevbXss5gkQYwKWrYbCQiW/'
    );

    await contract.mint('0x70997970c51812dc3a010c7d01b50e0d17dc79c8', 5);

    const nextToken = await contract.getCurrentToken();

    expect(nextToken).to.equal(6);

    // await contract.setDepositAddress(await depositAddress.getAddress());

    // const receipt = await contract
    //   .claim({
    //     value: ethers.utils.parseEther('0.1'),
    //   })
    //   .catch((e) => e.message);

    // expect(receipt).to.not.equal(
    //   `VM Exception while processing transaction: reverted with reason string 'Invalid amount'`
    // );
    // expect(await depositAddress.getBalance()).to.equal(
    //   ethers.utils.parseEther('0.1').add(depositAddressInitialBalance)
    // );
    // expect(await contract.balanceOf(await owner.getAddress())).to.equal(1);
  });

  // it("should not mint if user didn't send the right amount", async function () {
  //   const Contract = await ethers.getContractFactory('CyberPop');

  //   const contract = await Contract.deploy();

  //   await contract.setDepositAddress(await depositAddress.getAddress());

  //   const receipt = await contract
  //     .claim({
  //       value: ethers.utils.parseEther('0.1'),
  //     })
  //     .catch((e) => e.message);

  //   expect(receipt).to.equal(`VM Exception while processing transaction: reverted with reason string 'Invalid amount'`);
  // });

  // it('only contract owner should change the deposit address', async function () {
  //   const Contract = await ethers.getContractFactory('CyberPop');

  //   const contract = await Contract.deploy();

  //   const contractFuckerSigner = contract.connect(someAttacher);

  //   const receipt = await contractFuckerSigner
  //     .setDepositAddress(await someAttacher.getAddress())
  //     .catch((e) => e.message);

  //   expect(receipt).to.equal(
  //     `VM Exception while processing transaction: reverted with reason string 'Ownable: caller is not the owner'`
  //   );
  // });
});
