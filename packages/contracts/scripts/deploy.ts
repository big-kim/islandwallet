import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("PlaceholderToken");
  const contract = await Contract.deploy();
  await contract.waitForDeployment();
  console.log(`Placeholder deployed at ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
