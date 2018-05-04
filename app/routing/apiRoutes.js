
var amigosData = require("../data/friends.js");


module.exports = function(app) {
 
    app.get("/api/amigosdata", function(req, res) {
      res.json(amigosData);
    });

    app.post("/api/amigos", function(req, res ){
        amigosData.push(req.body);
        // res.json(true);
        // console.log(amigosData)
        var userData = req.body;
        var userScores = userData.score;
        console.log(userData);

        var totalDifference;

        var bestMatch = {
            name: "",
            photo: '',
            friendDiffernce: Infinity
        }

        for (var j=0; j < amigosData.length; j++){
            var currentFriend = amigosData[j];
            totalDifference = 0;

        

            for (var t= 0; t < currentFriend.score.length; t++){
                var currentFriendScore = currentFriend.score[t];
                var currentUserScore = userScores[t];

                totalDifference = Math.abs(parseInt(currentUserScore)- parseInt(currentFriendScore));
            }

            if (totalDifference <= bestMatch.friendDiffernce){
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.picture;
                bestMatch.friendDiffernce = totalDifference;
                amigosData.push(bestMatch);
            }
        }
    })
}


  
