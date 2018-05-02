
var amigosData = require("../data/friends.js");

module.exports = function(app) {
 
    app.get("/api/amigos", function(req, res) {
      res.json(amigosData);
    });
}

app.post("/api/amigos", function(req, res ){
    amigosData.push(req.body);
    res.json(true);
})
  
