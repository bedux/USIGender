var express = require('express');
var router = express.Router();
var query = require('../database/dbQuery');




router.get('/', function(req, res, next) {
    query.getAlllReply(function(data){res.json(data)});
});



router.post('/', function(req, res, next) {
    
    if(!req.body.attachments){
                 console.log(req.body);
 query.addNewReply(req.body.message,req.body.user,null,req.body.discussion,function(data){
          res.json(data);
      })
    }
    else{
                   query.addNewReply(req.body.message,req.body.user,req.body.attachments,req.body.discussion,function(data){
          res.json(data);
      })
    }
});




module.exports = router;
