module.exports = (app, path) => {

  /*
  Peticiones GET
  */

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/red-flags', (req,res) => {
    res.render('red-flags')
  });

};