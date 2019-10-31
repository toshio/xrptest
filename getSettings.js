const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({
  // TestNet
  server: 'wss://s.altnet.rippletest.net:51233'
});

async function main() {
  let address = 'rhXPs7Yvj6Z7ZyZhucGdZkBNAft89qBK4R';

  try {
    await api.connect();

    const settings = await api.getSettings(address);
    console.log(JSON.stringify(settings, null, 2));

    await api.disconnect();

  } catch (e) {
    console.error(e);
  }
}

main();
