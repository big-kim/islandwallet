import { expect } from "chai";
import { ethers } from "hardhat";

describe("PlaceholderToken", () => {
  it("deploys with default metadata", async () => {
    const Contract = await ethers.getContractFactory("PlaceholderToken");
    const contract = await Contract.deploy();
    await contract.waitForDeployment();

    expect(await contract.name()).to.equal("Placeholder");
    expect(await contract.symbol()).to.equal("PLC");
  });
});
