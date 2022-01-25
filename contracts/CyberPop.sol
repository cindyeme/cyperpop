// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Cyberpop is ERC721Enumerable, Ownable {
  using Strings for uint256;

  string baseURI;
  string public baseExtension = ".json";
  uint256 public cost = 0 ether;
  uint256 public discountCost;
  uint256 public maxSupply;
  uint256 public maxMintAmount = 10;
  bool public paused = false;
  bool public revealed = true;
  string public notRevealedUri;
  address public manager;

  mapping(address => bool) public dicountAccounts;

  constructor(
    string memory _name,
    string memory _symbol,
    uint256  _cost,
    uint256  _maxSupply,
    string memory _initBaseURI,
    address _manager

  ) ERC721(_name, _symbol) {
    manager = _manager;

    cost = _cost;

    maxSupply = _maxSupply;

    discountCost = _cost;

    setBaseURI(_initBaseURI);

  }
  
  // internal
  function changeOwnership(address _newOwner) public onlyOwner  {
    _transferOwnership(_newOwner);
  }

   // available balance
  function campaignBalance() public view returns (uint256)  {
    return address(this).balance;
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  // public
  function mint(uint256 _mintAmount) public payable {
    uint256 supply = totalSupply();
    require(!paused, "Campaingn Is Paused");
    require(_mintAmount >= 1, "Insufficient Mint Request - Mint Amount Must Be Greater Than or Equal 1");
    require(_mintAmount <= maxMintAmount, "Excess Mint Request -  Reduce Mint Amount");
    require(supply + _mintAmount <= maxSupply, "Excess Mint Amount Or Token Sold Out");

     if (msg.sender != owner()) {

        if(dicountAccounts[msg.sender] == true) {
          
          require(msg.value >= discountCost * _mintAmount);
        }

    }

    for (uint256 i = 1; i <= _mintAmount; i++) {
      _safeMint(msg.sender, supply + i);
    }
  }

  function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
  }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );
    
    if(revealed == false) {
        return notRevealedUri;
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
  }

  //only owner
  function setReveal(bool _reveal) public onlyOwner {
      revealed = _reveal;
  }
  
  function setCost(uint256 _newCost) public onlyOwner {
    cost = _newCost;
  }

   function setDiscountCost(uint256 _newCost) public onlyOwner {

    discountCost = cost *  (_newCost * 10) / 1000;
  }

  function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
    maxMintAmount = _newmaxMintAmount;
  }

   function setmaxSupply(uint256 _newmaxSupply) public onlyOwner {
    maxSupply = _newmaxSupply;
  }
  
  function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
    notRevealedUri = _notRevealedURI;
  }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }

 
  function pause(bool _state) public onlyOwner {
    paused = _state;
  }


   function addDiscountUser(address _user) public onlyOwner {
    dicountAccounts[_user] = true;
  }
 
  function removeDiscountUser(address _user) public onlyOwner {
    dicountAccounts[_user] = false;
  }
 
  function withdraw() public payable onlyOwner {
    // This will pay Cyberpop 2.5% of the initial sale.
    
    // =============================================================================
    (bool hs, ) = payable(0xaF156e45F396170b9231FA269f942d5C6d293C2E).call{value: address(this).balance * 25 / 1000}("");
    require(hs);
    // =============================================================================
    
    // This will payout the owner 95% of the contract balance.
    // Do not remove this otherwise you will not be able to withdraw the funds.
    // =============================================================================
    (bool os, ) = payable(owner()).call{value: address(this).balance}("");
    require(os);
    // =============================================================================
  }
}