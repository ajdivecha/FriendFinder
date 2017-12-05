var taterData = require("../data/taters");
var path = require("path");
var intersection = require("array-intersection");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

module.exports = function(app) {

  app.get("/api/taters", function(req, res) {

    res.json(taterData);

  });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  app.post("/api/taters", function(req, res) {

    req.body.scores = req.body.scores.map(Number);

      // taterData.push(req.body);
      // res.json(true);

    var scoresarrays = taterData.map(a => a.scores);

    var taterInput = req.body;
    var taterScores = taterInput.scores;

    var matchName = '';
    var matchImage= '';


    function intersect (a, b) {
      var d = {};
      var results = [];
      for (var i = 0; i < b.length; i++){
        d[b[i]] = true;
      }
      for (var j = 0; j < a.length; j++){
        if (d[a[j]])
        results.push(a[j]);
      }
      return results;
    }


    var lengths= [];
    for (var x = 0; x < scoresarrays.length; x++) {
      var intersections = intersect(taterData, scoresarrays[x]);
      lengths.push(intersections.length);
    }


    var indexMax = indexOfMax(lengths);


    function indexOfMax(arr) {
      if (arr.length === 0) {
        return -1;
      }

      var max = arr[0];
      var maxIndex = 0;

      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
        }
      }

      return maxIndex;
    }

  matchName = taterData[indexMax].name;
  matchImage = taterData[indexMax].photo;

    taterData.push(taterInput);
      return res.json({
        status: "OK",
        matchName: name,
        matchImage: photo
      });

    });
  };
