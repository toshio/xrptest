const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next)=>{
  res.send('<html><body>Hello, world</body></html>');
});

console.log(`Listening on port ${port}!`);
app.listen(port);
