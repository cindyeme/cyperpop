// import React, { useEffect} from "react";
// import Web3 from "web3";
// import Web3Modal from "web3modal";
// import Contract from "../artifacts/contracts/";
// const loadWeb3 = async()=>{
//  //THIS ALLOWS YOU TALK TO BLOCKCHAIN
//   const web3Modal = new Web3Modal({
//     network: "testnet", // optional
//     cacheProvider: true, // optional
//     providerOptions: {}, // required
//   });
//   const provider = await web3Modal.connect();
//   const web3 = new Web3(provider);
//   const netId = await web3.eth.net.getId();
//   //THIS WILL LOAD YOUR CONTRACT FROM BLOCKCHAIN
//   const contract = new web3.eth.Contract(
//     Contract.abi,
//     Contract.networks[netId].address
//   );
//   // FROM HERE YOU CAN NOW QUERY YOUR CONTRACT FOR DATA
//   // HERE ARE A FEW EXAMPLES
//   // THE TOKEN ID YOU WANT TO QUERY
//   const tokenID = 1;
//   // GET THE AMOUNT OF NFTs MINTED 
//   const totalSupply = await contract.methods.totalSupply().call();
//   // GET THE TOKEN URI
//   // THE URI IS THE LINK TO WHERE YOUR JSON DATA LIVES
//   const uri = await contract.methods.tokenURI(tokenID).call();
//   // GET THE OWNER OF A SPECIFIC TOKEN
//   const owner = await contract.methods.ownerOf(tokenID).call();
//   // CHECK IF A SPECIFIC TOKEN IS SOLD
//   const sold = await contract.methods.sold(tokenID).call();
//   // GET PRICE OF A SPECIFIC TOKEN
//   const price = await contract.methods.price(tokenID).call();
// }
// const ExampleComponent = ()=>{
// useEffect(()=>{
//     loadWeb3();
// },[])
// return (<p>My component</p>)
// }
// export default ExampleComponent