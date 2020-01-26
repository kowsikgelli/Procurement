const path = require('path')
const fs = require('fs-extra')
const solc = require('solc')

const buildPath=path.resolve(__dirname,'build');
fs.removeSync(buildPath)
const procurementpath=path.resolve(__dirname,'contracts','Procurement.sol')
const source = fs.readFileSync(procurementpath,'utf8')
var input={
    language: 'Solidity',
    sources: {
      'Procurement.sol': {
        content: source
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  }

  var output=JSON.parse(solc.compile(JSON.stringify(input)))
  console.log(output.contracts['Procurement.sol'].Procurement)
  fs.ensureDirSync(buildPath);
//   for(let contract in output){
//   fs.outputJsonSync(
//     path.resolve(buildPath,contract.contracts['Procurement.sol']+'.json'),
//     output[contract]
//   );
// }
fs.outputJsonSync(path.resolve(buildPath,'Procurement.json'),output.contracts['Procurement.sol'].Procurement)
  //console.log(output.contracts['Procurement.sol'].Procurement.abi)
  //module.exports=(output.contracts['lottery.sol'].Lottery)
  //module.exports=output.contracts['lottery.sol'].Lottery.evm.bytecode.object
 // console.log(output.contracts['lottery.sol'].Lottery.abi)

// module.exports={
// 	abi:output.contracts['Procurement.sol'].Procurement.abi,
// 	bytecode:output.contracts['Procurement.sol'].Procurement.evm.bytecode.object
// }
