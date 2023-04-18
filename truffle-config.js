const path = require('path');
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const url = process.env.REACT_APP_QUICKNODE_ENDPOINT;
const mnemonic = process.env.REACT_APP_MNEMONIC;
module.exports = {
  contracts_build_directory: path.join(__dirname, 'src/abis'),
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
    },
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '',
    },
    // matic: {
    //   provider: () => new HDWalletProvider(mnemonic, url),
    //   network_id: 80001,
    //   confirmations: 2,
    //   timeoutBlocks: 200,
    //   skipDryRun: false,
    // },
    polygon: {
      provider: () => new HDWalletProvider(mnemonic, url),
      network_id: '80001', // network id for the Mumbai testnet
      gas: 5500000, // gas limit for contract deployment
      confirmations: 2, // number of confirmations for a transaction
      timeoutBlocks: 200, // timeout for a transaction
      skipDryRun: true // skip dry run before deploying
    }
  },
  compilers: {
    solc: {
      version: '0.8.1',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  plugins: ['truffle-plugin-verify'],
};
