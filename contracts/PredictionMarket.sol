 // SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
// import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";


interface IERC20Token {
  function transfer(address, uint256) external returns (bool);
   function approve(address, uint256) external returns (bool);
   function transferFrom(
       address,
       address,
       uint256
   ) external returns (bool);
   function totalSupply() external view returns (uint256);
   function balanceOf(address) external view returns (uint256);
   function allowance(address, address) external view returns (uint256);
   event Transfer(address indexed from, address indexed to, uint256 value);
   event Approval(
       address indexed owner,
       address indexed spender,
       uint256 value
   );
}
contract PredictionMarket {
   using SafeMath for uint;

   uint internal numContracts = 0;
   address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;
   struct Contract {
       address payable creator;
       string description;
       uint endTimestamp;
       uint yesShares;
       uint noShares;
       uint price;
       bool resolved;
       bool outcome;
   }
   mapping(uint => Contract) internal contracts;
   function createContract(
       string memory _description,
       uint _endTimestamp,
       uint _price
   ) public {
       Contract storage newContract = contracts[numContracts];
       newContract.creator = payable(msg.sender);
       newContract.description = _description;
       newContract.endTimestamp = _endTimestamp;
       newContract.price = _price;
       newContract.resolved = false;
       newContract.outcome = false;
       numContracts++;
   }
   function getContract(uint _index) public view returns (
   address,
   string memory,
   uint,
   uint,
   uint,
   uint,
   bool,
   bool
) {
   Contract storage c = contracts[_index];
   return (
       c.creator,
       c.description,
       c.endTimestamp,
       c.yesShares,
       c.noShares,
       c.price,
       c.resolved,
       c.outcome
   );
}
   function buyShares(uint _index, bool _outcome) public payable {
       require(
           !contracts[_index].resolved,
           "Contract has already been resolved."
       );
       require(
           msg.value == contracts[_index].price,
           "Incorrect amount of cUSD sent."
       );
       if (_outcome) {
           contracts[_index].yesShares = contracts[_index].yesShares.add(msg.value);
       } else {
           contracts[_index].noShares = contracts[_index].noShares.add(msg.value);
       }
   }
function resolveContract(uint _index, bool _outcome) public {
   require(
       block.timestamp > contracts[_index].endTimestamp,
       "Contract has not yet expired."
   );
   require(
       !contracts[_index].resolved,
       "Contract has already been resolved."
   );
   contracts[_index].resolved = true;
   contracts[_index].outcome = _outcome;
   uint totalShares = contracts[_index].yesShares.add(contracts[_index].noShares);
   if (totalShares > 0) {
       uint payoutPerShare = address(this).balance.div(totalShares);
       if (_outcome) {
           contracts[_index].creator.transfer(contracts[_index].yesShares.mul(payoutPerShare));
       } else {
           contracts[_index].creator.transfer(contracts[_index].noShares.mul(payoutPerShare));
       }
   }
}}