const Web3 = require("web3");
const fs = require('fs').promises;

const smartContractAddress = '0x0429F570F09Cd64729570ffdE39C0007Ee598dc6';
const url = "http://localhost:8545";
const account1 = "0x5fD31f16Da87cCB3D34CEC4F08FE4be090B8F04D";
const account2 = "0x7d145076c8124BD596D730552Bc0Bc98ceE83030";



// const {EtherHttpWeb3} = require("./lib/ether-http-web3");
class Args {

}

class EtherHttpWeb3Args{

    constructor(args){
        if(!args.target) throw new TypeError("invalid argument - target");
        if(!args.contract_address) throw new TypeError("invalid argument - contract_address");
        if(!args.abi_name) throw new TypeError("invalid argument - abi_name");
        
        this.args = args;

        const handler = {
            apply: function(target, thisArg, argumentList) {
                console.log("proxy~!");
                console.log(thisArg);
                console.log(argumentList);

                return "Hello World";
            }
        }

        this.test = new Proxy(this.test, handler);
    }

    test(t){
        console.log(t);
    }
}



(async () => {
    const e = new EtherHttpWeb3Args({
        target: 1,
        contract_address: 2,
        abi_name: 3,
    })


    console.log(Reflect.get(e, 'test')("hegege"));
})()


async function update(){
    const web3 = new Web3(new Web3.providers.HttpProvider(url));
    const abi = JSON.parse(await fs.readFile("../build/contracts/practice.json"));
    // const practiceContract = new web3.eth.Contract("input here the ABI Object");
    const practiceContract = new web3.eth.Contract(abi, smartContractAddress);
    // const practice = practiceContract.at('input here the address of smart contract');
    const result = await practiceContract.methods.getMessageHash(account2, 10, "coffee and donuts", 1234).call();
    // const result = await practiceContract.methods.getMessageHash(account2, 10, "coffee and donuts", 1234).send({from:account1});
    console.log(result);
}

/////////////////////////////////////////////////////////////////


async function dump() {
    const practice = practiceContract.at(smartContractAddress);
    console.log(practice);
}