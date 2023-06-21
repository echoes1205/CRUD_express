var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//creacion de rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var loginRouter = require('./routes/login');
var registroRouter = require('./routes/registro');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//llamado de las rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/login', loginRouter);
//app.use('/registro', registroRouter);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



//gpt

// Obtener todos los registros
// app.get('usuarios', (req, res, next) => {
//   const query = 'SELECT * FROM usuarios';
//   db.query(query, (error, resultado) => {
//     if (error) throw error;
//     res.json(resultado);
//   });
// });

// Agregar un nuevo registro de usuario
// app.post('usuarios', (req, res, next) => {
//   const { user, password } = req.body;
//   const query = 'INSERT INTO usuarios (user, password) VALUES (?, ?)';
//   db.query(query, [user, password], (error, results) => {
//     if (error) throw error;
//     res.send('Registro agregado correctamente.');
//   });
// });

//eliminar
// app.delete('tbproductos:id', (req, res, next) => {
//   const { ID } = req.body;
//   const query = 'DELETE FROM tbproductos WHERE ID = ?';
//   db.query(query, [ID], (error, results) => {
//     if (error) throw error;
//     res.send('Registro eliminado');
//   });
// });

//actualizar

// app.put('tbproductos', (req, res, next) => {
//   const id = req.params.id;
//   const query = 'DELETE FROM tbproductos WHERE ID = ?';
//   db.query(query, [ID], (error, results) => {
//     if (error) throw error;
//     res.send('Registro eliminado correctamente.');
//   });
// });

// app.put('tbproductos', (req, res, next) => {
//   const { titulo, imagen, descripcion, precio } = req.body;
//   const query = 'UPDATE tbproductos (titulo, imagen, descripcion, precio) VALUES (?, ?, ?, ?)';
//   db.query(query, [titulo, imagen, descripcion, precio], (error, results) => {
//     if (error) throw error;
//     res.send('Registro agregado correctamente.');
//   });
// });



// POST - Actualizar producto
// app.post('/actualizar', (req, res, next) => {
//   const id = req.params.id;
//   const { titulo, imagen, descripcion, precio } = req.body;
//   // Aquí debes realizar la lógica para actualizar el producto en la base de datos
//   // utilizando el ID y los nuevos datos del producto
//   // Para simplificar el ejemplo, supongamos que actualizas el producto en alguna manera
//   console.log(`Actualizando producto ${ID}: Título=${titulo}, Imagen=${imagen}, Descripcion=${descripcion}, Precio=${precio}`);
//   res.redirect('/productos'); // Redireccionar a la lista de productos después de la actualización
// });

//delete
app.post('/id/eliminar', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM tbproductos WHERE ID = ?';
  connection.query(query, [id], (err, result) => {
    if (err) throw err;
    res.redirect('/productos');
  });
});

app.post('/id/editar', (req, res) => {
  const id = req.params.id;
  const { titulo, imagen, descripcion, precio } = req.body;
  const query = 'UPDATE tbproductos SET titulo = ?, imagen = ?, descripcion = ?, precio = ? WHERE ID = ?';
  connection.query(query, [titulo, imagen, descripcion, precio, id], (err, result) => {
    if (err) throw err;
    res.redirect('/productos');
  });
});


module.exports = app;

