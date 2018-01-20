var express = require('express');
var router = express.Router();
var ba = require('beeradvocate-api');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('send a resource');
})

module.exports = router;
