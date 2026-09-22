const fs = require('fs');
const path = require('path');
const { emptyStore } = require('../data/store');

const storePath = path.join(__dirname, '..', 'data', 'store.json');

fs.writeFileSync(storePath, JSON.stringify(emptyStore, null, 2));
console.log('api_integration_two data has been reset.');
