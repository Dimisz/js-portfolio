const products = [];

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
  products.push({ title : req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products, 
    pageTitle: 'Products Page', 
    path:'/', 
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
}