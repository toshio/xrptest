const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  // Test Net
  server: 'wss://s.altnet.rippletest.net:51233'
});

let address = 'rhXPs7Yvj6Z7ZyZhucGdZkBNAft89qBK4R';
let secret = 's・・・・・・・・・・・・・・';

let regularKey = 'rnLJHQ4QuMLDHXWPguMUiE8GKFPkbcPKNF'; // 登録したいRegular key

async function main() {
  try {
    await api.connect();

    let settings = {
      regularKey
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
