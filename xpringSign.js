const { Wallet } = require('xpring-js');

const mnemonic = 'cousin sentence ・・・・・・・・・・';
const wallet = Wallet.generateWalletFromMnemonic(mnemonic);

const message = Buffer.from('Hello, world').toString('hex');
const signature = wallet.sign(message);
console.log(signature);
console.log(wallet.verify(message, signature)); // true
