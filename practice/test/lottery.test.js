const Lottery = artifacts.require("Lottery"); //build 폴더

contract('Lottery', function({deployer, user1, user2}){ //Account가 순서대로 들어옴
    let lottery;
    beforeEach(async () => {
        console.log("Before Each")
        lottery = await Lottery.new();
    })

    it('Basic test', async()=>{
        console.log("Basic TEST!!!")
        let owner = await lottery.owner();
        let value = await lottery.getSomeValue();

        console.log(`owner : ${owner}`);
        console.log(`value : ${value}`);
        assert.equal(value, 5)
    })
})