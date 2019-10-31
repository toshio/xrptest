const express = require('express');
const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI();
const app = express();
const port = 3000;

// テンプレートエンジンejsを使います
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  // XRPのアドレスとシークレット生成
  let {address, secret} = api.generateAddress();

  // 応答にテンプレートを使用
  res.render('template.ejs', {
    address,
    secret
  });
});

console.log(`Listening on port ${port}!`);
app.listen(port);
