const { Wallet, XRPAmount, XpringClient } = require('xpring-js');

async function main() {
  const mnemonic = 'cousin sentence ・・・・・・・・・・';
  const wallet = Wallet.generateWalletFromMnemonic(mnemonic);
  
  const remoteURL='grpc.xpring.tech:80';
  const addressTo='rso1269g9gnpg9t1Pa1TqzepWizKjZMBDZ';

  // Amount of XRP to send
  const amount = new XRPAmount();
  amount.setDrops('123456789');

  const xpringClient = XpringClient.xpringClientWithEndpoint(remoteURL);
  const result = await xpringClient.send(amount, addressTo, wallet);
  console.log(result);
}

main();
