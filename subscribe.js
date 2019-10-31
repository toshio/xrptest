const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  // TestNet
  server: 'wss://s.altnet.rippletest.net:51233'
});

const address = 'rso1269g9gnpg9t1Pa1TqzepWizKjZMBDZ';

async function main() {
  try {
    // Connect 
    await api.connect();

    api.connection.on('transaction', (event) => {
        console.log(JSON.stringify(event, null, 2))
    });

    let response = await api.request('subscribe', {
        accounts: [ address ]
    });
    console.log('Successfully subscribed')

  } catch (e) {
    console.log(e);
  }
}

main();

