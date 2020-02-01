var friends = require("../data/friends");

// routing
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newScores = req.body.scores;

    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    for (var i = 0; i < friends.length; i++) {
      var scoresDiff = 0;

      for (var j = 0; j < newScores.length; j++) {
        scoresDiff += Math.abs(
          parseInt(friends[i].scores[j]) - parseInt(newScores[j])
        );
      }
      scoresArray.push(scoresDiff);
    }

    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }

    var bff = friends[bestMatch];
    res.json(bff);

    friends.push(req.body);
  });
};
