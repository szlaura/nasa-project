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
    // {

    // element_count: req.body.element_count,
    // links: {
    //     next: req.body.links.next,
    //     previous: req.body.links.previous,
    //     self: req.body.links.self,
    // },
    // near_earth_objects: {
    //   valami: req.body.near_earth_objects.valami,
    //   date1: req.body.near_earth_objects.date1
      // .forEach(element => {
      //   return {
      //     neo_reference_id: element.neo_reference_id
      //   }
      // })//[{
        // links: {
        //     self: req.body.date1[0].links.self
        // },
       // id: req.body.id,
      //  neo_reference_id: req.body.near_earth_objects.date1[0].neo_reference_id
        // name: req.body.name,
        // nasa_jpl_url: req.body.nasa_jpl_url,
        // absolute_magnitude_h: req.body.absolute_magnitude_h,
        // estimated_diameter: {
        //     kilometers: {
        //         estimated_diameter_min: req.body.estimated_diameter_min,
        //         estimated_diameter_max: req.body.estimated_diameter_max
        //     },
        //     meters: {
        //         estimated_diameter_min: req.body.estimated_diameter_min,
        //         estimated_diameter_max: req.body.estimated_diameter_max
        //     },
        //     miles: {
        //         estimated_diameter_min: req.body.estimated_diameter_min,
        //         estimated_diameter_max: req.body.estimated_diameter_max
        //     },
        //     feet: {
        //         estimated_diameter_min: req.body.estimated_diameter_min,
        //         estimated_diameter_max: req.body.estimated_diameter_max
        //     }
        // },
        // is_potentially_hazardous_asteroid: req.body.is_potentially_hazardous_asteroid,
        // close_approach_data: [{
        //         close_approach_date: req.body.close_approach_date,
        //         close_approach_date_full: req.body.close_approach_date_full,
        //         epoch_date_close_approach: req.body.epoch_date_close_approach,
        //         relative_velocity: {
        //             kilometers_per_second: req.body.kilometers_per_second,
        //             kilometers_per_hour: req.body.kilometers_per_hour,
        //             miles_per_hour: req.body.miles_per_hour
        //         },
        //         miss_distance: {
        //             astronomical: req.body.astronomical,
        //             lunar: req.body.lunar,
        //             kilometers: req.body.kilometers,
        //             miles: req.body.miles
        //         },
        //         orbiting_body: req.body.orbiting_body
        //     }
        // ],
        // is_sentry_object: req.body.is_sentry_object
    //  }]
    // }
      






    // name: req.body.name,
    // address: req.body.address,
    // facilities: req.body.facilities.split(","),
    // distance: req.body.distance,
    // nearearthobjects: {
    //   sms:req.body.nearearthobjects.sms,
    //   dateofsm: [{
    //     // id: req.body.nearearthobjects.id,
    //     neoreferenceid: req.body.nearearthobjects.dateofsm[0].neoreferenceid,
    //     // name: req.body.nearearthobjects.name,
    //     // nasajplurl: req.body.nearearthobjects.nasajplurl,
    //     // absolutemagnitudeh: req.body.nearearthobjects.absolutemagnitudeh
    //   }]
    
   
   (err, asteroids) => {
          if (err) { sendJSONresponse(res, 404, err); } else 
                  { sendJSONresponse(res, 201, asteroids); } 
    });
};

/* GET api/asteroids/asteroidid */
const asteroidsReadOne = (req, res) => {
  Loc
    .findById(req.params.locationid)
    .exec((err, location) => {
      if (!location) {
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
        .json(location);
    });
  };


module.exports = {
  asteroidsReadAll,
  asteroidsCreate,
  asteroidsReadOne
};