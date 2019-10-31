const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({
  // TestNet
  server: 'wss://s.altnet.rippletest.net:51233'
});

async function main() {
  // 送信元
  let address = 'rhXPs7Yvj6Z7ZyZhucGdZkBNAft89qBK4R';
  let secret = 's・・・・・・・・・・・・・・';

  // 支払先
  let addressTo = 'rso1269g9gnpg9t1Pa1TqzepWizKjZMBDZ';
  let amount = '123.45';

  try {
    await api.connect();

    const payment = {
      source: {
        address: address,
        maxAmount: {
          value: amount,
          currency: 'XRP'
        }
      },
      destination: {
        address: addressTo,
        amount: {
          value: amount,
          currency: 'XRP'
        }
      }
    };

    let prepared = await api.preparePayment(address, payment);
    const {signedTransaction} = api.sign(prepared.txJSON, secret);

    let result = await api.submit(signedTransaction);
    console.log(JSON.stringify(result, null, 2));

    await api.disconnect();
  } catch (e) {
    console.error(e);
  }
}

main();
