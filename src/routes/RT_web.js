module.exports = (app, path) => {

  /*
  Peticiones GET
  */

  app.get('/', (req, res) => {
    res.render('index');
  });

};