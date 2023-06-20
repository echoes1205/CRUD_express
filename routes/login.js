var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");


router.post('/', (req, res, next) => {
    const { user, password } = req.body;
    const query = 'SELECT * FROM usuarios WHERE user = ? AND password = ?';
    db.query(query, [user, password], (error, resultado) => {
        if (error) throw error;
        if (resultado.length > 0) {
            res.send('Inicio de sesion exitoso');
        } else {
            res.send('Usuario o contraseña incorrectos');
        }
    });
});

module.exports = router;
