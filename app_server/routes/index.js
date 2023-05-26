const express = require('express');
const router = express.Router();
const ctrlAsteroids = require('../controllers/asteroids');


/* Locations pages */
router.get('/', ctrlAsteroids.asteroidsList);
// router.get('/location', ctrlLocations.locationInfo);
// router.get('/location/:locationid', ctrlLocations.locationInfo);
// router.get('/location/:locationid/review/new', ctrlLocations.addReview);
// router.post('/location/:locationid/review/new', ctrlLocations.doAddReview);

/* Other pages */
//router.get('/about', ctrlOthers.about);

module.exports = router;
