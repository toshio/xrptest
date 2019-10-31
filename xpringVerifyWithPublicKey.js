const rippleKeyPair = require('ripple-keypairs');

const message = Buffer.from('Hello, world').toString('hex');
const signature = '3045022100BF4AD0A5BB155D889C323B0E08D76B3C6234FD050943A549A36ECBBF854078F9022040D0BDC75B196BF9A8652A27BD9D16A5811932C46ABA7C93F40E9D6BC9DB4547';
const publicKey = '0266B9129836900CE27A17B08F0C11E86D0B979D6E659FC12693DA291111EFC2FF';

let verified = rippleKeyPair.verify(message, signature, publicKey);
console.log(verified);
