/* 
  Declaracion de Modulos
*/
  //-- Express -- 
  const express = require('express');
  const session = require('express-session');
  const app = express();

  //-- Path --
  const path = require('path');

/*
  Imports
*/
  //-- Confrig --
  const config = require('./src/config/config.json');


/*
  SetUp
*/
  //-- App --
  app.set('port', config.server.port);
  app.set('views', path.join(__dirname, '/src/views'));
  app.set('view engine', 'pug');
  app.use('/assets', express.static('src/assets'));
  app.use('/',express.static('src/public'));

/*
  Middlewares
*/
app.use(express.urlencoded({extended: false}));

/*
  Rutas
*/
  //-- WEB --
  require('./src/routes/RT_web')(app, path);
  // -- 404 --
  app.use(function(req,res){  
    res.status(404);
    res.render('404');
  });

/*
  DEVELOPER UTILS
*/
  //-- Morgan --
  const morgan = require('morgan');
  app.use(morgan('dev'));

  //-- Render views
  app.use("/render/*", function(req, res) {
    res.render(req.params[0]);
  });

//Listener
app.listen(app.get('port'), () => {
  console.log('Servidor iniciado en el puerto ' + app.get('port'));
});