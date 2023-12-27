const { Web3 } = require('web3'); //importing web3
let web3 = new Web3(
  new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/')
);
const ABI = require('./ABI.json');
//Create a contract instance -ABI and contract address
const readContract = () => {
  const contractAddress = '0xB626ec274599165F947b0358CD452Aa8388915ea';
  const contractInstance = new web3.eth.Contract(ABI, contractAddress);
  // call() - we are reading fromm the blockchain
  //const value = await contractInstance.methods.get().call();(to make changes in smart contract instead of get and call write set(10).send({from:"address"}))
  console.log(contractInstance);
};
readContract();
