const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI();

let account = api.generateAddress();
console.log(account);

let keyPair = api.deriveKeypair(account.secret);
console.log(keyPair);

let address = api.deriveAddress(keyPair.publicKey);
console.log(address);
