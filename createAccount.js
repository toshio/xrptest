const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI();

let account = api.generateAddress();
console.log(account);
