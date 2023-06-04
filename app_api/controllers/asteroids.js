const { response } = require('express');
const mongoose = require('mongoose');
const Asteroids = mongoose.model('Asteroids');

const sendJSONresponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

/* GET api/asteroids */
const asteroidsReadAll = (req, res) => {
  Asteroids
    .find({})
    .exec((err, asteroids) => {
        if (!asteroids) {
          sendJSONresponse(res, 404, {"message" : "asteroids not found"});
        } else if (err) { sendJSONresponse(res, 404, err);  }
        else { 
          sendJSONresponse(res, 200, asteroids);
        }
  });     
};

/* GET api/asteroids/:asteroidid */
const asteroidsReadOneById = (req, res) => {
  Asteroids
    .findById(req.params.asteroidid)
    .exec((err, asteroid) => {
        if (!asteroid) {
          return res.status(404).json({"message": "asteroid not found" });
          } else if (err) {
            return res.status(404).json(err);
          }
      res.status(200).json(asteroid);
    });
  };

/* POST api/asteroids */
const asteroidsCreate = (req, res) => {
  Asteroids.create(req.body,   
   (err, asteroids) => {
          if (err) { sendJSONresponse(res, 404, err); } else 
                  { sendJSONresponse(res, 201, asteroids); } 
    });
};

/* GET api/asteroids/:dailyastid/asteroidobject/:asteroidid/ */
const asteroidsReadOne = (req, res) => {
  Asteroids
  .find(
    {"links": {
          
               $elemMatch: {"next": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-05-27&end_date=2023-05-27&detailed=false&api_key=8x7SnxROCmJKcbOAt2XiQSWYnGaiQ8aLmYfawmT4"}
          
  }})
  //.where('_id').equals(req.params.dailyastid)
 // .where("asteroid.near_earth_objects['2023-05-30'].id").equals('2001862')
  //.select( { date: {$elemMatch: {id: req.params.asteroidid}}})
  .exec((err, asteroid) => {
      if (asteroid) {
      //   sendJSONresponse(res, 404, {"message": "asteroidid not found"});
      // } else if (err) {
      //   sendJSONresponse(res, 400, err);
      // }
      //  if (asteroid.length > 0) {
      //   const comment = asteroid.near_earth_objects.date1.id(req.params.asteroidid);
      //   if (!comment) {
      //     sendJSONresponse(res, 404, {"message": "reviewid not found"});
        // } else {
        
        
          sendJSONresponse(res, 200, asteroid);
      //  }
      } else {
        sendJSONresponse(res, 404, {"message": "No ast found"});
       }
    });
}
  // const { asteroidid } = req.param;
  // Asteroids
  //   .findOne({asteroidid}, {})
  //   .exec((err, asteroid) => {
  //     if (!asteroid) {
  //       return res
  //         .status(404)
  //         .json({
  //           "message": "asteroid not found" });
  //         } else if (err) {
  //           return res
  //               .status(404)
  //               .json(err);
  //         }
  //     res
  //       .status(200)
  //       .json(asteroid);
  //   });
  // };


module.exports = {
  asteroidsReadAll,
  asteroidsCreate,
  asteroidsReadOne,
  asteroidsReadOneById
};