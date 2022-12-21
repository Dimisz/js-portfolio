const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const errorsControllers = require('./controllers/errors');
const PORT = 3000;

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// importing my routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/',errorsControllers.getPageNotFound);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});