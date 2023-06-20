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
app.use('/registro', registroRouter);


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
app.get('usuarios', (req, res, next) => {
  const query = 'SELECT * FROM usuarios';
  db.query(query, (error, resultado) => {
    if (error) throw error;
    res.json(resultado);
  });
});

// Obtener un registro por ID
app.get('usuarios/:id', (req, res, next) => {
  const id = req.params.id;
  const query = 'SELECT * FROM usuarios WHERE id = ?';
  db.query(query, [id], (error, resultado) => {
    if (error) throw error;
    res.json(resultado);
  });
});

// Agregar un nuevo registro
app.post('usuarios', (req, res, next) => {
  const { user, password } = req.body;
  const query = 'INSERT INTO usuarios (user, password) VALUES (?, ?)';
  db.query(query, [user, password], (error, results) => {
    if (error) throw error;
    res.send('Registro agregado correctamente.');
  });
});

app.post('registro', (req, res, next) => {
  const { user, password } = req.body;
  console.log("dsdsd")
});

module.exports = app;