const express = require('express');
const router = express.Router();
const ctrlComments = require('../controllers/comments');
const ctrlAsteroids = require('../controllers/asteroids');


// Asteroids 
router.get('/asteroids/', ctrlAsteroids.asteroidsReadAll);
router.post('/asteroids', ctrlAsteroids.asteroidsCreate);

router.get('/asteroids/:asteroidid', ctrlAsteroids.asteroidsReadOne);

//Comments
router.post('/asteroids/:asteroidid/comments', ctrlComments.commentCreate);

router.put('/asteroids/:asteroidid/comments/:commentid', ctrlComments.commentsUpdateOne);
router.delete('/asteroids/:asteroidid/comments/:commentid', ctrlComments.commentsDeleteOne);

module.exports = router;
