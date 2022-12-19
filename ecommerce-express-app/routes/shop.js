const express = require('express');
const path = require('path');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  //console.log('shop.js', adminData.products);
  //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  const products = adminData.products;
  res.render('shop', {prods: products, docTitle: 'Products Page'});
});

module.exports = router;

