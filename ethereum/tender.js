import web3 from './web3';
import Procurement from './build/Procurement.json';

const instance=new web3.eth.Contract((Procurement.abi),'0x7F59425cA6143d42e8F4aa83f252D305814a6591')

export default instance;