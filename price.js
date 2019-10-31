const { promisify } = require('util');
const rp = promisify(require('request'));

const API_KEY = '・・・・・・';

async function main() {
  let result = await rp({
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
    qs: {
      symbol: 'XRP',
      convert: 'JPY'
    },
    headers: {
      'X-CMC_PRO_API_KEY': API_KEY
    },
    json: true,
    gzip: true
  });

  if (result.statusCode == 200) {
    let body = result.body;
    let xrp = body.data.XRP;
    let price = xrp.quote.JPY.price;
    console.log(price);
  }
}

main();
