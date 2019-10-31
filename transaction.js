const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({
  // TestNet
  server: 'wss://s.altnet.rippletest.net:51233'
});

async function main() {
  // トランザクションID
  let id = 'EC70B2219ABBB2F30AE6D7C52BA407261209F26609D837FDD1B955CD369D2780';

  try {
    await api.connect();

    const transaction = await api.getTransaction(id);
    console.log(JSON.stringify(transaction, null, 2));

    await api.disconnect();

  } catch (e) {
    console.error(e);
  }
}

main();
