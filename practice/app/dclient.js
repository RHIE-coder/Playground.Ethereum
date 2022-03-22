const Web3 = require("web3");
const fs = require('fs').promises;

(async()=>{
    const web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
    const abi = JSON.parse(await fs.readFile("./practice.json"));
    const practiceContract = web3.eth.contract(abi);
    // const practice = practiceContract.at('input here the address of smart contract');
    // console.log(practice);
    
})()