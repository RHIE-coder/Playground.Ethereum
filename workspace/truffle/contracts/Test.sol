// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    uint public numData;

    function setNumData(uint _numData) public {
        numData = _numData;
    }

    function getNumData() public view returns(uint){
        return numData;
    }

}