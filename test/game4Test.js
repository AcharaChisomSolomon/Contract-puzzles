const { expect } = require("chai");

describe("Game4", function () { 
    it('should be a winner', async function () { 
        const game4 = await ethers.deployContract('Game4');
        const [owner, addr1] = await hre.ethers.getSigners();

        await game4.connect(owner).write(addr1.address);

        await game4.connect(addr1).win(owner.address);

        expect(await game4.isWon()).to.equal(true);
    });
});