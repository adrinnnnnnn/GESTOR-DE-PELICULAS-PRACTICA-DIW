var express = require('express');
var router = express.Router();

/* Página inicial */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});

/* Página de login */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* Página de contacto */
router.get('/contacto', function(req, res, next) {
  res.render('contact', { title: 'Contacto' });
});

module.exports = router;