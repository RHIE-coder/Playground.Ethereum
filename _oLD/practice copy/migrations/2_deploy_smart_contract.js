const Lottery = artifacts.require("Lottery"); //build 폴더

module.exports = function (deployer) {
  deployer.deploy(Lottery);
};
