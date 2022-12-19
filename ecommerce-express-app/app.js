const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const { engine } = require('express-handlebars');

const PORT = 3000;

const express = require('express');
const app = express();

app.engine('hbs', engine({
  extname: 'hbs',
  layoutsDir: 'views/layouts',
  defaultLayout: 'main-layout',
}));
app.set('view engine', 'hbs');
// app.set('view engine', 'pug');

// importing my routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use('/', (req, res) => {
  //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', {pageTitle: '404 Errorrrr'});
})
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});