'use strict';

module.exports = {
  smart_contracts_path: "./contracts",
  contracts_build_directory: './contracts/build/',
  networks: {
    ganache: {
      host: 'localhost',
      port: 8545,
      gas: 6e6, // gas limit
      gasPrice: 20e9, // 20 gwei, default for ganache
      network_id: '*'
    }
  }
};
