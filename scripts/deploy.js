// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { unlockConfig } = require("../Config/unlockConfig")
const { unlockArgument } = require("../Config/unlockArgument")


async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.00");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(...unlockArgument)

  await lock.deployed();


  console.log(
    `Lock with ${unlockConfig.lockedAmount}
    )}ETH and unlock timestamp ${unlockConfig.unlockTime}
     deployed to ${lock.address}
      `
  );


  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY)
  {
    console.log("verifying contract...")
    try {
      await run("verify:verify", {
         address: lock.address,
        constructorArguments: 
        // unlockArgument
         [
               unlockTime,
               {
                value: lockedAmount
               }
        ],
      });
    } catch (e) {
      if (e.message.toLowerCase().includes("already verified")) {
        console.log("Already Verified")
      } else {
        console.log(e)
      }

    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});