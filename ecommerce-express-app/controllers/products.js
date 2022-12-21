const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Productt', 
    path:'/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render('shop', {
    prods: products, 
    pageTitle: 'Products Page', 
    path:'/', 
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
}