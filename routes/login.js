var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");


// Configurar vista

// Ruta para renderizar la página de registro
router.get('/', function(req, res, next) {
    db.query("SELECT * FROM usuarios", function (err, resultado) {
        console.log(resultado);
        res.render('login', { title: 'Iniciar sesion', user: resultado });
    });
});

module.exports = router;
