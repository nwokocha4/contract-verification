require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();




const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.9",
  networks: {
  goerli: {
    url: GOERLI_RPC_URL,
    accounts: [GOERLI_PRIVATE_KEY],
    chainId: 5,   
},
  },
  etherscan: {
    apiKey: {
        goerli: ETHERSCAN_API_KEY,
    },
},
};