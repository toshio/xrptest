const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({
  // TestNet
  server: 'wss://s.altnet.rippletest.net:51233'
});

async function main() {
  // 対象アドレス
  let address = 'rhXPs7Yvj6Z7ZyZhucGdZkBNAft89qBK4R';

  try {
    await api.connect();

    let serverInfo = await api.getServerInfo();

    let [minLedgerVersion, maxLedgerVersion] = serverInfo.completeLedgers.split('-');
    let transactions = await api.getTransactions(address, {
      minLedgerVersion: Number(minLedgerVersion),
      maxLedgerVersion: Number(maxLedgerVersion)
    });

    for (let transaction of transactions) {
      console.log(`id:        ${transaction.id}`);
      console.log(`sequence:  ${transaction.sequence}`);
      console.log(`type:      ${transaction.type}`);
      console.log(`timestamp: ${transaction.outcome.timestamp}`);
      console.log(`result:    ${transaction.outcome.result}`);
      console.log();
    }

    await api.disconnect();

  } catch (e) {
    console.error(e);
  }
}

main();
