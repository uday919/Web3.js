const { Web3 } = require('web3'); //importing web3
let web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
const sendEther = async () => {
  const weiValue = web3.utils.toWei('1', 'ether');
  await web3.eth.sendTransaction({
    from: '0x5DBD44CeA246B598E9017Aa753b94B2445d22896', //sender address
    to: '0x219745753046d3c77a15082663b09B9F2ca1b1f0',
    value: weiValue,
  });
  console.log('Transaction successful');
};
sendEther();
