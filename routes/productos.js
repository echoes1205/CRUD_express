var express = require('express');
var router = express.Router();
var db = require ("../conexion/conexion");



/* GET productos page. */
router.get('/', function(req, res, next) {
    db.query("SELECT * FROM tbproductos", function (err,resultado){
        console.log(resultado)
        res.render('productos', { title: 'Productos disponibles en stock', Libros: resultado});
    });
  });

module.exports = router;
