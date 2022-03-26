const Web3 = require("web3");
const path = require("path");
const fs = require("fs");

/*
argsProxyhandler

    Args 클래스를 위한 Proxy Handler 함수
    Args 클래스의 assertExist() 함수 호출을 강제하기 위함
*/
const argsProxyhandler = {
    construct(target, args){
        const t = new target(...args);
        if(!t.isAsserted()) throw new SyntaxError("You have to invoke assertExist() function in constructor");
        return t;
    }
}


/*
Args.class

    각 라이브러리 constructor에 필요한 파라미터 규약들의 기본이 되는 클래스

    @constructor
        @param args : Object
            생성자에 필요한 파라미터의 매개변수
    
    @fields
        - isAsserted : assertExist() 함수 호출 여부를 확인하는 private flag 변수

    @statics
        - getClassName : 클래스 이름을 반환

    @methods
        - assertExist : 전달 받은 args가 주어진 arg_names 리스트와 일치하는지 확인
            @param arg_names : 파라미터와 일치하는 매개변수의 존재 여부 확인
        - isAsserted : @fields isAsserted 값 반환
        - assign : 매개변수를 받아들인 객체에 파라미터 binding 진행
            @param target : 매개변수를 받아들인 객체
*/
class Args {
    #isAsserted = false;
    
    constructor(args){
        this.args = args;
        this.validation = new Proxy(this.validation, {
            apply: function(target, thisArgs, argumentsList){
                console.log("validation!");
                console.log(target);
                console.log(thisArgs);
                console.log(thisArgs.constructor.name);
                console.log(argumentsList[0].name);
            }
        });
    }

    static getClassName(){
        return this.name;
    }

    assertExist(...arg_names){
        arg_names.forEach(arg_name=>{
            if(!this.args[arg_name]) throw new TypeError(`The ${arg_name} is not exists`);
        })
        this.#isAsserted = true;
    }

    isAsserted(){
        return this.#isAsserted;
    }

    validation(target_args){
        console.log("-------")
        console.log(target_args)
    }

    assign(target){
        for(const key in this.args){
            target[key] = this.args[key]
        }
    }

}

/*
EtherHttpWeb3Args.class

    EtherHttpWeb3.class 생성자 매개변수

    @required_params
        - target
        - contract_address
        - abi_name
*/
class EtherHttpWeb3Args extends Args{
    constructor(args){
        super(args);
        this.assertExist('target', 'contract_address', 'abi_name');
    }

    // validation(target_args){
    //     if(!target_args || !target_args instanceof EtherHttpWeb3Args) throw new TypeError("invalid arguments");
    // }
}

/*
EtherHttpWeb3.class

    HTTP Protocol 전용 Ethereum Network와 상호작용하는 클래스

    @constructor
        @param options {
            target : Web3 객체 활용에 필요한 Provider 설정
            contract_address : 스마트 컨트렉트의 주소
            abi_name : 스마트 컨트렉트 JSON 인터페이스의 파일 이름
        }

    @methods
        - 
        - doSend() : 스마트 컨트렉트 Tx를 발생시키는 함수 호출(Ether 필요)
        - doCall() : 스마트 컨트렉트 Tx를 발생시키지 않는 함수 호출
*/
module.exports.EtherHttpWeb3 = class {
    constructor(etherHttpWeb3Args) {
        
        etherHttpWeb3Args.assign(this);
        this.web3 = new Web3(new Web3.providers.HttpProvider(etherHttpWeb3Args.target));
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
        // const Reflect.apply(this.contract.methods, undefined, params ?? [])
    }

    async doCall(params) {
        Reflect.apply(this.contract.methods, undefined, params ?? []);
    }
}


// const Web3 = require("web3");
// const { send } = require("process");
// const account = "0x5fD31f16Da87cCB3D34CEC4F08FE4be090B8F04D";
// const contract_address = '0x6c28Cef55caE63Ade447B81107A199c55FC9E6d6';
// const web3 = new Web3(new Web3.providers.HttpProvider(url));
// const abi = JSON.parse(await fs.readFile("../build/contracts/hello.json"));
// const helloContract = new web3.eth.Contract(abi, contract_address);
// await helloContract.methods.setNum(10).call(); // just get return value if the return value is exists
// const set_result = await helloContract.methods.setNum(10).send({from:account});
// const get_result = await helloContract.methods.getNum().call();
// console.log(set_result) // will print json that is related to transaction informations
// console.log(get_result) // 10;





// const web3 = new Web3(new Web3.providers.HttpProvider(url));
// const abi = JSON.parse(await fs.readFile("../build/contracts/practice.json"));
// // const practiceContract = new web3.eth.Contract("input here the ABI Object");
// const practiceContract = new web3.eth.Contract(abi, smartContractAddress);
// // const practice = practiceContract.at('input here the address of smart contract');

module.exports.EtherHttpWeb3Args = new Proxy(EtherHttpWeb3Args, argsProxyhandler);