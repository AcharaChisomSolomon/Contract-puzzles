const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Game2", function () { 
    it('should be a winner', async function () { 
        const game2 = await ethers.deployContract('Game2');

        await game2.switchOn(20);
        await game2.switchOn(47);
        await game2.switchOn(212);

        await game2.win();

        expect(await game2.isWon()).to.equal(true);
    });
});