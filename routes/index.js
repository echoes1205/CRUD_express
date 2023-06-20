var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mi Web' });
});


/* GET nosotros page. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Inicio' });
});

/* GET registro page. */
router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Registrarse' });
});


router.post('reg', (req, res, next) => {
  const { user, password } = req.body;
  console.log("dsdsd")
});
module.exports = router;
