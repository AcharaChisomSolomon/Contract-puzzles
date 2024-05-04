// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Game1 {
    bool public isWon;
    bool public unlocked;

    function unlock() external {
        unlocked = true;
    }

    function win() external {
        require(unlocked, "Nope. Try again!");
        isWon = true;
    }
}
