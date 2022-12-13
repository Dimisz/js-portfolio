const http = require('http');
const bodyParser = require('body-parser');

const PORT = 3000;

const express = require('express');
const app = express();

// importing my routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:true}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res) => {
  res.status(404).send('<h1>No page found</h1>');
})
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});