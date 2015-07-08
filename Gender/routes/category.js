var express = require('express');
var router = express.Router();
var query = require('../database/dbQuery');
/* GET home page. */
router.get('/:current', function(req, res, next) {
  query.getAllSubCategory(req.params.current,function(data){res.json(data)});
    
});

router.get('/', function(req, res, next) {
  query.getAllSubCategory(null,function(data){res.json(data)});
    
});
module.exports = router;