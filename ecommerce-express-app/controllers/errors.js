exports.getPageNotFound = (req, res) => {
  res.status(404).render('404', {pageTitle: '404 Elol', path: null});
};