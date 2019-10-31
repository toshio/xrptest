const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({
  // TestNet
  server: 'wss://s.altnet.rippletest.net:51233'
});

async function main() {
  try {
    await api.connect();

    const address = 'rhXPs7Yvj6Z7ZyZhucGdZkBNAft89qBK4R';
    let account = await api.getAccountInfo(address);
    console.log(JSON.stringify(account, null, 2));

    await api.disconnect();

  } catch (e) {
    console.error(e);
  }
}

main();
