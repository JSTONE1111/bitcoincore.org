const axios = require('axios');

const url = `https://bitcoin-mainnet.alchemy-blast.com/v2/${yourAPIKey}`;

const payload = {
jsonrpc: '2.0',
id: 1,
method: 'getblockcount',
params: []
};

axios.post(url, payload)
.then(response => {
console.log('Current block height:', response.data.result);
})
.catch(error => {
console.error('Error fetching block count:', error);
});

