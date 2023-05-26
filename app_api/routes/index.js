const express = require('express');
const router = express.Router();
const ctrlComments = require('../controllers/comments');
const ctrlAsteroids = require('../controllers/asteroids');


// Asteroids 
router.get('/asteroids/', ctrlAsteroids.asteroidsReadAll);
router.post('/asteroids', ctrlAsteroids.asteroidsCreate);

module.exports = router;
