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

    let settings = {
      signers: {
        threshold: 3,
        weights: [
          {
            address: 'rNBotvkqrkbFBNj76ogXBGcEiBknmrvSB3',
            weight: 2
          },
          {
            address: 'rw8DkN9T32pfZokxpH7myQzJAhBzoMnP75',
            weight: 1
          },
          {
            address: 'rsCn3TpsvXkJ9YEQr8XB1rZDpWqFwgKmX1',
            weight: 1
          }
        ]
      }
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
