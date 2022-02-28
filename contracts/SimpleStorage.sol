// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract SimpleStorage {
    // this will get initialize to zero
    uint256 favouriteUINT;

    struct People {
        uint256 favouriteUINT;
        string name;
    }

    People[] public people;
    mapping(string => uint256) public stringToUint256;

    function store(uint256 _favouriteNumber) public {
        favouriteUINT = _favouriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favouriteUINT;
    }

    function addPerson(uint256 _favouriteUINT, string memory _name) public {
        people.push(People(_favouriteUINT, _name));
        stringToUint256[_name] = _favouriteUINT;
    }
}
