const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({
  // My standalone server
  server: 'wss://localhost:51233'
});

async function main() {
  try {
    await api.connect();

    const address = 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh';
    let account = await api.getAccountInfo(address);
    console.log(JSON.stringify(account, null, 2));

    await api.disconnect();

  } catch (e) {
    console.error(e);
  }
}

main();
