const { Web3 } = require('web3'); //importing web3
let web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545')); //ganache

const connectBlockchain = async () => {
  const balance = await web3.eth.getBalance(
    '0x5DBD44CeA246B598E9017Aa753b94B2445d22896'
  );
  console.log(balance);
};
connectBlockchain();
