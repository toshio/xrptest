const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({
  // TestNet
  server: 'wss://s.altnet.rippletest.net:51233'
});

let address = 'rhXPs7Yvj6Z7ZyZhucGdZkBNAft89qBK4R';
let secret = 's・・・・・・・・・・・・・・';

async function main() {
  try {
    await api.connect();

    const settings = {
      requireDestinationTag: true
    };

    let prepared = await api.prepareSettings(address, settings);
    const {signedTransaction} = api.sign(prepared.txJSON, secret);

    let result = await api.submit(signedTransaction);
    console.log(JSON.stringify(result, null, 2));

    await api.disconnect();

  } catch (e) {
    console.error(e);
  }
}

main();
