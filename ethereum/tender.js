import web3 from './web3';
import Procurement from './build/Procurement.json';

const instance=new web3.eth.Contract((Procurement.abi),'0x8743bc096706554011Ab6D00B3b436A88b230F60')

export default instance;