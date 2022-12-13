const http = require('http');
const bodyParser = require('body-parser');

const PORT = 3000;

const express = require('express');
const app = express();

app.use(bodyParser.urlencoded());

app.use('/add-product', (req, res) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res) => {
  console.log(req.body);
  console.log('in the /product...');
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hi there</h1>');
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});