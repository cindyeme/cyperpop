// SPDX-License-Identifier: MIT
import "./CyberPop.sol";

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract CyberpopFactory is Ownable {
  address creator = msg.sender;

  address manager;

  bool public _isPrivate  = false;

  address[] public campaigns;

  function createCampaign (
    string memory _name,
    string memory _symbol,
    uint256  _cost,
    uint256  _maxSupply,
    string memory _initBaseURI
    ) public {
      
      manager = _isPrivate == true ? creator :  tx.origin;

      if(_isPrivate == true) {
        require(tx.origin == owner(), "Only CyberPop Is Allowed To Create Campaigns For Now");
      }
    
    Cyberpop newCampaign = new Cyberpop(_name,_symbol, _cost, _maxSupply, _initBaseURI, manager);

    newCampaign.changeOwnership(_isPrivate == true ? creator : manager);

    campaigns.push(address(newCampaign));
  }

  function changePrivacy (bool _privacy) public onlyOwner {
    _isPrivate = _privacy;
  }


  function allCampaigns() public view returns  (address[] memory) {
      return campaigns;
  }
}