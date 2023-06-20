var express = require('express');
var router = express.Router();
var db = require('../conexion/conexion');


// Configurar vista

// Ruta para renderizar la página de registro
//router.get('/registro', (req, res) => {
  //  res.render('registro');
 // });

  //router.post('/registro', (req, res) => {
    //const { nombre, email, contraseña } = req.body;
    //const query = 'INSERT INTO usuarios (user, password) VALUES (?, ?)';
    //db.query(query, [nombre, email, contraseña], (error, results) => {
      //if (error) throw error;
      //res.send('Registro exitoso');
    //});
  //});

//router.get('/registro', function(req, res, next) {
  //  db.query('INSERT INTO usuarios (user, password) VALUES (?, ?)', [username, password], (err, resultado) => {
    //    console.log(resultado);
      //  res.render('registro');
    //});
//});

router.get('/', (req, res, next) => {
    res.render('/');
  });
  
  router.post('/', (req, res, next) => {
    const { user, password } = req.body;
    const query = 'INSERT INTO usuarios (user, password) VALUES (?, ?)';
    db.query(query, [user, password], (error, results) => {
      if (error) throw error;
      res.send('Registro exitoso');
    });
  });

module.exports = router;
