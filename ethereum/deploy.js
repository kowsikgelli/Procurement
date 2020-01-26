const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const Procurement= require('./build/Procurement.json');

const provider = new HDWalletProvider(
  'slim chimney burger exit first vast isolate cactus cave very alone remember',
  'https://rinkeby.infura.io/v3/6c47f50d50a54cf3bd3527414b6c3d4c'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(Procurement.abi)
    .deploy({ data: '0x'+Procurement.evm.bytecode.object })
    .send({ gas: '1000000', from: accounts[0] });
  console.log(Procurement.abi)
  console.log('Contract deployed to', result.options.address);
};
deploy();
//Contract deployed to 0x5291345aDA97AC9FBCF95F8eCBcb3aa1D7E86C92