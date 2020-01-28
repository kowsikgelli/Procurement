import web3 from './web3';
import Procurement from './build/Procurement.json';

const instance=new web3.eth.Contract((Procurement.abi),'0xd3Ca8ec6c2fc8cd68fC67A2dc7f69a5Ef1ac5Daa')

export default instance;