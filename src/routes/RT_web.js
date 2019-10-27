module.exports = (app, path) => {

  /*
  Peticiones GET
  */

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/posts/:id', (req, res) => {
    var id = req.params.id;
    res.render('posts/' + id);
  });

  app.get('/red-flags', (req,res) => {
    res.render('posts/red-flags')
  });
};