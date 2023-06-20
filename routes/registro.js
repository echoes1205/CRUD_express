var express = require('express');
var router = express.Router();
var db = require('../conexion/conexion');

router.post('/', (req, res, next) => {
  const { user, password } = req.body;
  const query = 'INSERT INTO usuarios (user, password) VALUES (?, ?)';
  db.query(query, [user, password], (error, results) => {
    if (error) throw error;
    res.send('Registro exitoso');
    });
});

module.exports = router;
