var express = require('express')
var router = express.Router()
var db = require('../conexion/conexion')
const connection = require("../conexion/conexion");


//agregar un nuevo producto (CREATE)

router.post('/agregar', (req, res, next) => {
  const { titulo, imagen, descripcion, precio } = req.body
  const query =
    'INSERT INTO tbproductos (titulo, imagen, descripcion, precio) VALUES (?, ?, ?, ?)'
  db.query(query, [titulo, imagen, descripcion, precio], (error, results) => {
    if (error) throw error
    res.redirect('/productos')
  })
})

//leer productos (READ)
router.get('/', function (req, res, next) {
  db.query('SELECT * FROM tbproductos', function (err, resultado) {
    console.log(resultado)
    res.render('productos', {
      title: 'Productos disponibles en stock',
      Libros: resultado
    })
  })
})


//actualizar productos (UPDATE)
router.post('/actualizar', (req, res, next) => {
  //const { ID } = req.params
  const { titulo, imagen, descripcion, precio, ID } = req.body

  const query =
    'UPDATE tbproductos SET titulo = ?, imagen = ?, descripcion = ?, precio = ? WHERE ID = ?'
  const values = [titulo, imagen, descripcion, precio, ID]

  connection.query(query, values, (err, results) => {
    if (err) throw error
    res.redirect('/productos')
  })
})

//eliminar productos (DELETE)
router.post('/delete', (req, res, next) => {
  const { ID } = req.body
  const query = 'DELETE FROM tbproductos WHERE ID = ?'
  console.log("eliminado")

  db.query(query, [ID], (error, results) => {
    if (error) throw error
    res.redirect('/productos')
  })
})

module.exports = router;
