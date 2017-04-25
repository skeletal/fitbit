var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Auth' });
});
router.get('/fitbit', function(req, res, next) {
  res.render('index', { title: 'Fitbit' });
});
router.post('/fitbit/callback', function(req, res, next) {
    debug(req);
});
router.post('/fitbit/callback/success', function(req, res, next) {
    debug(req);
});
router.post('/fitbit/callback/failure', function(req, res, next) {
    debug(req);
});

module.exports = router;
