const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Game5", function () { 
    it('should be a winner', async function () { 
        const game5 = await ethers.deployContract('Game5');

        const threshold = ethers.toBigInt("0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf");

        let wallet;
        let addressBigNumber;

        do {
            wallet = ethers.Wallet.createRandom();
            addressBigNumber = ethers.toBigInt(wallet.address);
        } while (addressBigNumber >= threshold);

        const provider = await ethers.provider;
        wallet = wallet.connect(provider);

        const [deployer] = await ethers.getSigners();

        await deployer.sendTransaction({
            to: wallet.address,
            value: ethers.parseUnits("1", "ether")
        });

        await game5.connect(wallet).win()

        expect(await game5.isWon()).to.equal(true);
    });
});