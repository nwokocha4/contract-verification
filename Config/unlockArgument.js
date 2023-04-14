const { unlockConfig } = require("./unlockConfig")
const {utils} = require("ethers")




 const unlockArgument = [
    unlockConfig.unlockTime,
    {
    value: utils.parseEther(unlockConfig.lockedAmount.toString()),
    }
 ]

 module.exports = { unlockArgument }