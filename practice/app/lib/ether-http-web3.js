
/*  
    HTTP Protocal 전용 Ethereum Network와 상호작용하는 클래스

    @constructor
        @param url: Ethereum Network Address

    @Methods
        - getContract: Contract 호출을 위한 Contract 설정

*/
export class EtherHttpWeb3 {
    constructor(url) {
        this.web3 = new Web3(new Web3.providers.HttpProvider(url));
    }

    setContract() {

    }
}

const Web3 = require("web3");
const account = "0x5fD31f16Da87cCB3D34CEC4F08FE4be090B8F04D";
const contract_address = '0x6c28Cef55caE63Ade447B81107A199c55FC9E6d6';
const web3 = new Web3(new Web3.providers.HttpProvider(url));
const abi = JSON.parse(await fs.readFile("../build/contracts/hello.json"));
const helloContract = new web3.eth.Contract(abi, contract_address);
await helloContract.methods.setNum(10).call(); // just get return value if the return value is exists
const set_result = await helloContract.methods.setNum(10).send({from:account});
const get_result = await helloContract.methods.getNum().call();
console.log(set_result) // will print json that is related to transaction informations
console.log(get_result) // 10;





const web3 = new Web3(new Web3.providers.HttpProvider(url));
const abi = JSON.parse(await fs.readFile("../build/contracts/practice.json"));
// const practiceContract = new web3.eth.Contract("input here the ABI Object");
const practiceContract = new web3.eth.Contract(abi, smartContractAddress);
// const practice = practiceContract.at('input here the address of smart contract');