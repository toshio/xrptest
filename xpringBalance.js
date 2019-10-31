const { XpringClient } = require('xpring-js');

const remoteURL='grpc.xpring.tech:80';
const address='rGJpRuLhSXMf7E2NWst7BLZF98tyUd8HSG';

async function main() {
  const xpringClient = XpringClient.xpringClientWithEndpoint(remoteURL);
  let balance = await xpringClient.getBalance(address);
  console.log(balance);
}

main();
