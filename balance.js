// Import the web3.js library
const Web3 = require('web3');

// Connect to a web3 provider (such as Infura)
const web3 = new Web3('https://mainnet.infura.io/v3/<your-project-id>');

// Define the account address
const account = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';

// Get the account balance in wei (the smallest unit of ether)
web3.eth.getBalance(account, (error, balance) => {
    if (error) {
        console.error(error);
    } else {
        // Convert the balance from wei to ether and display it
        console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
    }
});

// Get the account transaction count (the number of outgoing transactions)
web3.eth.getTransactionCount(account, (error, count) => {
    if (error) {
        console.error(error);
    } else {
        // Display the transaction count
        console.log('Transaction count:', count);
    }
});
