var express = require('express');
var router = express.Router();
var ba = require('beeradvocate-api');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/beers/:beer', function(req, res, next) {
  ba.beerSearch(req.params.beer, function(beers) {
    res.send(beers);
  });
})



module.exports = router;
