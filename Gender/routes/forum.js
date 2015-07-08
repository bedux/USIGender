var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([{Title:"Under what circumstances will .NET processes and AppDomains share loaded assemblies in memory?",Description:"I'm looking for more details around when and how .NET applications share loaded assemblies. I'm interested in sharing between OS processes, but also between AppDomains within the same process. Sharing assemblies reduces system memory usage by avoiding having multiple copies of the same assembly in memory, I presume that is the main benefit but would be interested to know if there are other benefits and/or implications.A summary of what I've learned so far...",User:{UserName:"Marco",ImageSRC:"/images/defaultUser.png",Rank:3},Info:{Respose:123,LastView:"25min",Views:1234}},
           
           {Title:"asdasdasd",Object:"asasas",Description:"asdasdasdasdasd",User:{UserName:"Marco",ImageSRC:"/images/defaultUser.png",Rank:3},Info:{Respose:123,LastView:"25min",Views:1234}},
            {Title:"asdasdasd",Object:"asasas",Description:"asdasdasdasdasd",User:{UserName:"Marco",ImageSRC:"/images/defaultUser.png",Rank:3},Info:{Respose:123,LastView:"25min",Views:1234}},
            {Title:"asdasdasd",Object:"asasas",Description:"asdasdasdasdasd",User:{UserName:"Marco",ImageSRC:"/images/defaultUser.png",Rank:3},Info:{Respose:123,LastView:"25min",Views:1234}},
            {Title:"asdasdasd",Object:"asasas",Description:"asdasdasdasdasd",User:{UserName:"Marco",ImageSRC:"/images/defaultUser.png",Rank:3},Info:{Respose:123,LastView:"25min",Views:1234}},
            {Title:"asdasdasd",Object:"asasas",Description:"asdasdasdasdasd",User:{UserName:"Marco",ImageSRC:"/images/defaultUser.png",Rank:3},Info:{Respose:123,LastView:"25min",Views:1234}}
           
           ]);
});

module.exports = router;
