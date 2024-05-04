// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.24;

contract Game4 {
    bool public isWon;

    mapping(address => mapping(address => bool)) nested;

    function write(address x) external {
        nested[x][msg.sender] = true;
    }

    function win(address y) external {
        require(nested[msg.sender][y], "Nope. Try again!");

        isWon = true;
    }
}