import Web3 from 'web3';

let web3;
let init=()=>{
	if(typeof window!=='undefined' && typeof window.ethereum !=='undefined'){
		window.web3 = new Web3(window.ethereum)
    	window.ethereum.enable().then((res,err) =>{
    		if(err){
    			console.log(err)
    		}else{
    			return res
    		}
    		
    	})
	}
	if(typeof window!=='undefined' && typeof window.web3 !=='undefined' ){
  		web3=new Web3(window.web3.currentProvider);
	}else{
  		const provider=new Web3.providers.HttpProvider(
    	'https://rinkeby.infura.io/v3/6c47f50d50a54cf3bd3527414b6c3d4c'
  	)
  	web3=new Web3(provider);
	}
}
init()
// if(typeof window!=='undefined' && typeof window.ethereum !=='undefined'){
// 	window.web3 = new Web3(window.ethereum)
//     await window.ethereum.enable()
// }
// else if(typeof window!=='undefined' && typeof window.web3 !=='undefined' ){
//   web3=new Web3(window.web3.currentProvider);
// }else{
//   const provider=new Web3.providers.HttpProvider(
//     'https://rinkeby.infura.io/v3/6c47f50d50a54cf3bd3527414b6c3d4c'
//   )
//   web3=new Web3(provider);
// }
//  const loadWeb3=async()=> {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum)
//       await window.ethereum.enable()
//     }
//     else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider)
//     }
//     else {
//       window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
//     }
//   }

// loadWeb3();

export default web3;