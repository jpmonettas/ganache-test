const MyContract = artifacts.require("MyContract");

module.exports = function(deployer, network, accounts) {

  const address = accounts [0];
  const gas = 4e6;
  const opts = {gas: gas, from: address};

  deployer
    .then (() => {
      console.log ("@@@ using Web3 version:", web3.version.api);
      console.log ("@@@ using address", address);
    })
    .then (() => deployer.deploy (MyContract, Object.assign(opts, {gas: gas})))
    .then (myContract => {
      console.log("Contract deployed at: " + myContract.address);});
}
