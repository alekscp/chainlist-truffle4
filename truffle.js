var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "enlist lounge shift mango strong brick city snack absurd equip inquiry thank"

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    chainskills: {
      host: "localhost",
      port: 8545,
      network_id: "4224"
    },
    // rinkeby: {
    //   provider: function() {
    //     return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/66b0d4b979ff4b9e8a14a8c079f371ab")
    //   },
    //   network_id: 3
    // },
    ropsen: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/66b0d4b979ff4b9e8a14a8c079f371ab")
      },
      network_id: 3,
      gas: 4500000,
      gasPrice: 10000000000
    },
  }
};
