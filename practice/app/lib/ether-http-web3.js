const Web3 = require("web3");
const path = require("path");
const fs = require("fs");

class EtherHttpWeb3Args{

    constructor(args){
        if(!args.target) throw new TypeError("invalid argument - target");
        if(!args.contract_address) throw new TypeError("invalid argument - contract_address");
        if(!args.abi_name) throw new TypeError("invalid argument - abi_name");
        
        this.args = args;
    }

    

}

/*  
    HTTP Protocol 전용 Ethereum Network와 상호작용하는 클래스

    @constructor
        @param options {
            target : Web3 객체 활용에 필요한 Provider 설정
            contract_address : 스마트 컨트렉트의 주소
            abi_name : 스마트 컨트렉트 JSON 인터페이스의 파일 이름
        }

    @Methods
        - 
        - doSend() : 스마트 컨트렉트 Tx를 발생시키는 함수 호출(Ether 필요)
        - doCall() : 스마트 컨트렉트 Tx를 발생시키지 않는 함수 호출

*/
module.exports = class EtherHttpWeb3 {
    constructor(etherHttpWeb3Args) {
        if(!etherHttpWeb3Args || etherHttpWeb3Args instanceof EtherHttpWeb3Args) throw new TypeError("invalid arguments");
        
        this.web3 = new Web3(new Web3.providers.HttpProvider(etherHttpWeb3Args.target));
        this.contract_address = etherHttpWeb3Args.contract_address;
        this.abi_name = etherHttpWeb3Args.abi_name;
        this.abi_root_path = "../build/contracts";
    }

    changeAbiRootPath(abi_root_path){
        this.abi_root_path = abi_root_path;
    }

    changeContractAddress(contract_address){
        this.contract_address = contract_address;
    }
    

    async setContract(contract_address){
        const abi_json = JSON.parse(await fs.readFile(path.join(this.abi_root_path, `${this.abi_name}.json`)));
        this.contract = new web3.eth.Contract(abi_json, this.contract_address);
    }

    async doSend(send_object) {
        if(!send_object) throw new TypeError();
        const Reflect.apply(this.contract.methods, undefined, params ?? [])
    }

    async doCall(params) {
        Reflect.apply(this.contract.methods, undefined, params ?? []);
    }
}

const Web3 = require("web3");
const { send } = require("process");
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