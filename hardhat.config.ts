import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"

import 'hardhat-deploy'
import '@nomiclabs/hardhat-ethers'
import '@nomicfoundation/hardhat-toolbox'

const {
  ARBITRUM_GOERLI_OWNER_PRIVATE_KEY = '',
  ARBITRUM_OWNER_PRIVATE_KEY = '',
  LOCAL_OWNER_PRIVATE_KEY = '',
} = process.env;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{
      version: '0.5.16',
      settings: { optimizer: { enabled: true, runs: 200 }},
    }]
  },
  typechain: {
    outDir: 'dist/types',
    target: 'ethers-v5',
  },
  namedAccounts: {
    owner: 0
  },
  networks: {
    arbitrumGoerli: {
      url: `https://arbitrum-goerli.infura.io/v3/22f0d956105b483ba08434cd7d0b86ec`,
      accounts: [ARBITRUM_GOERLI_OWNER_PRIVATE_KEY],
      tags: ['token', 'testnet'],
    },
    arbitrum: {
      url: '',
      accounts: [ARBITRUM_OWNER_PRIVATE_KEY],
      tags: ['token'],
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [LOCAL_OWNER_PRIVATE_KEY],
      tags: ['token', 'master-chef', 'mainnet', 'testnet'],
    }
  },
};

export default config
