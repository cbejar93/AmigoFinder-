
var amigosData = require("../data/friends.js");


module.exports = function(app) {
 
    app.get("/api/amigosdata", function(req, res) {
      res.json(amigosData);
    });

    app.post("/api/amigos", function(req, res ){
        amigosData.push(req.body);
        // res.json(true);
        console.log(amigosData)
    })
}


  
