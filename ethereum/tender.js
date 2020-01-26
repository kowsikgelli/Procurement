import web3 from './web3';
import Procurement from './build/Procurement.json';

const instance=new web3.eth.Contract((Procurement.abi),'0x5291345aDA97AC9FBCF95F8eCBcb3aa1D7E86C92')

export default instance;