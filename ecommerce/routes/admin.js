const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
  console.log(req.body);
  console.log('in the /admin/add-product...');
  res.redirect('/');
});

module.exports = router;
