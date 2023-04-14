
const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.utils.parseEther("0.00");
  

var unlockConfig = {
      unlockTime,
      lockedAmount: 0.0000,
}

module.exports = { unlockConfig };