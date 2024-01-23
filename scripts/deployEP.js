
const hre = require("hardhat");

async function main() {


  const ep = await hre.ethers.deployContract("EntryPoint");

  await ep.waitForDeployment();

  console.log(
    `deployed to ${ep.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
