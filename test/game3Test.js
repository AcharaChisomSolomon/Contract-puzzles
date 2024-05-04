const { expect } = require("chai");
const helpers = require('@nomicfoundation/hardhat-network-helpers')

describe("Game3", function () { 
    it('should be a winner', async function () { 
        const game3 = await ethers.deployContract('Game3');

        const [owner, addr1, addr2, addr3] = await hre.ethers.getSigners();

        await helpers.setBalance(addr1.address, 10n ** 18n);
        await helpers.setBalance(addr2.address, 10n ** 18n);
        await helpers.setBalance(addr3.address, 10n ** 18n);

        await game3.connect(addr1).buy({ value: '2' });
        await game3.connect(addr2).buy({ value: '3' });
        await game3.connect(addr3).buy({ value: '1' });

        await game3.win(addr1.address, addr2.address, addr3.address);

        expect(await game3.isWon()).to.equal(true);
    });
});