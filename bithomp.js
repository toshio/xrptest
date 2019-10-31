const { promisify } = require('util');
const rp = promisify(require('request'));

let address = 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh';

async function main() {
  let result = await rp({
    method: 'GET',
    uri: `https://bithomp.com/api/v1/userinfo/${address}`,
    json: true,
    gzip: true
  });

  if (result.statusCode == 200) {
    let body = result.body;
    console.log(JSON.stringify(body, null, 2));
  }
}

main();
