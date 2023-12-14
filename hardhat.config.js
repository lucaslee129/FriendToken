require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require('dotenv').config();

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = process.env.my_Alchemy;

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = process.env.Test_Secret;
const ETHERSCAN_APIKEY = process.env.Etherscan_Key;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.4.24",
        settings: {
          optimizer: {
            enabled: true
          }
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true
          }
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true
          }
        },
      },
      {
        version: "0.8.3",
        settings: {
          optimizer: {
            enabled: true
          }
        },
      },
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true
          }
        },
      },
      {
        version: "0.8.21",
        settings: {
          optimizer: {
            enabled: true
          }
        },
      },
    ]
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    },
    hardhat:{
      accounts: [
        {
          privateKey: process.env.Test_Secret,
          balance: "20000000000000000000000"
        }
      ]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_APIKEY,
  },
  sourcify: {
    enabled: true
  }
  
};