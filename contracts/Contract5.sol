// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.24;

contract Game5 {
    bool public isWon;

    address threshold = 0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf;

    function win() external {
        require(bytes20(msg.sender) < bytes20(threshold), "Nope, Try again!");

        isWon = true;
    }
}