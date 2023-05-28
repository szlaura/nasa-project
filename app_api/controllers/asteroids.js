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

/* POST api/asteroids */
const asteroidsCreate = (req, res) => {
  Asteroids.create(req.body,   
   (err, asteroids) => {
          if (err) { sendJSONresponse(res, 404, err); } else 
                  { sendJSONresponse(res, 201, asteroids); } 
    });
};

/* GET api/asteroids/asteroidid */
const asteroidsReadOne = (req, res) => {
  Asteroids
    .findById(req.params.locationid)
    .exec((err, asteroid) => {
      if (!asteroid) {
        return res
          .status(404)
          .json({
            "message": "asteroid not found" });
          } else if (err) {
            return res
                .status(404)
                .json(err);
          }
      res
        .status(200)
        .json(asteroid);
    });
  };


module.exports = {
  asteroidsReadAll,
  asteroidsCreate,
  asteroidsReadOne
};