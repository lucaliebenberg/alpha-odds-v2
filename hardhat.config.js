require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.4.23"
      },
      {
        version: "0.7.0",
      },
      {
        version: "0.8.0",
      },
      {
        version: "0.8.20",
      },
    ],
  },
  networks: {
    // celo_mainnet: {
    //   url: "https://forno.celo.org/",
    //   chainId: 42220,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`],
    // },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
