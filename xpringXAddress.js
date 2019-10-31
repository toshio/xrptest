const { Utils } = require('xpring-js');

const classicAddress = 'rGJpRuLhSXMf7E2NWst7BLZF98tyUd8HSG';
const tag = 123456789;

const xAddress = Utils.encodeXAddress(classicAddress, tag);
console.log(xAddress);
