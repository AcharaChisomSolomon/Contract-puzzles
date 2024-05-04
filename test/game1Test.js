const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Game1", function () { 
  it('should be a winner', async function () { 
    const Game1 = await ethers.deployContract('Game1');

    await Game1.unlock();

    await Game1.win();

    expect(await Game1.isWon()).to.equal(true);
  });
});