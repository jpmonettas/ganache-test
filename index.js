var fs=require("fs");
var Web3=require("web3");
var web3 = new Web3("ws://localhost:8545");

var firstAccount = "0xe9fc7a1f53f6a5995835ed195c45dcdffc63a7a1";
var contractAddress = "0x2217BbB537Dd857733634E28b4a76955f62a97a1";
var abi = (JSON.parse(fs.readFileSync("./contracts/build/MyContract.json"))["abi"]);

var instance = new web3.eth.Contract(abi, contractAddress, {from: firstAccount});
instance.methods.fireSomeEvent("0xA").send();
console.log("Done!");
