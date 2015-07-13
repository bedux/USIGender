var express = require('express');
var router = express.Router();
var query = require('../database/dbQuery');

/* GET home page. */
router.get('/:current', function(req, res, next) {
   query.getAttachment(req.params.current,function(data){res.json(data)});
    
});



router.get('/', function(req, res, next) {
    query.getAllAttachment(function(data){res.json(data)});
});



router.post('/', function(req, res, next) {
  query.addNewAttachment(req.body,function(data){
      res.json(data);
  })
});


module.exports = router;
