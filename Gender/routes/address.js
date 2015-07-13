var express = require('express');
var router = express.Router();
var query = require('../database/dbQuery');

/* GET home page. */
router.get('/:current', function(req, res, next) {
  
    
});



router.get('/', function(req, res, next) {
    query.getAllAddress(function(data){res.json(data)});
});



router.post('/', function(req, res, next) {
  query.addNewAddres(req.body.street,req.body.city,function(data){
      res.json(data);
  })
});






module.exports = router;
 