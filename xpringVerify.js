const { Wallet } = require('xpring-js');

const message = Buffer.from('Hello, world').toString('hex');
const signature = '3045022100BF4AD0A5BB155D889C323B0E08D76B3C6234FD050943A549A36ECBBF854078F9022040D0BDC75B196BF9A8652A27BD9D16A5811932C46ABA7C93F40E9D6BC9DB4547';

const mnemonic = 'cousin sentence ・・・・・・・・・・';
const wallet = Wallet.generateWalletFromMnemonic(mnemonic);
const verified = wallet.verify(message, signature);
console.log(verified);
