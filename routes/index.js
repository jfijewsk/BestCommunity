var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/home.html'));

});


/* GET donate page. */
router.get('/donate', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/donate.html'));
});

/* GET inHouse page. */
router.get('/inHouse', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/inHouseService.html'));
});

/* GET external page. */
router.get('/external', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/externalServices.html'));
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/login.html'));
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/services.html'));
});

/* GET services page. */
router.get('/volunteer', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/volunteer.html'));
});

/* POST catering page. */
router.post("/catering",(req, res) => {
    res.sendFile(path.join(__dirname + '/catering.html'));
});

/* POST catering page. */
router.post("/checkout",(req, res) => {
  res.sendFile(path.join(__dirname + '/checkout.html'));
});


/* ALL 404 page. */
router.all('/404', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/404.html'));

});


module.exports = router;
