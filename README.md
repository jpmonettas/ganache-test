# Bug


Running ganache-cli(6.1.8) with -b 5 and submitting 4 transactions in a row should result in the 4 transactions being mined in the same block.
Instead I'm seeing each transaction being mined in a separate block.

# Steps to reproduce

- Clone this repo
- npm i
- npx ganache-cli -d -m ganachetest -p 8545 -b 5
- npx truffle migrate --network ganache
- node index.js
