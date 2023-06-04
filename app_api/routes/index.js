const express = require('express');
const router = express.Router();
const ctrlComments = require('../controllers/comments');
const ctrlAsteroids = require('../controllers/asteroids');


// Asteroids 
router.get('/asteroids', ctrlAsteroids.asteroidsReadAll);
router.post('/asteroids', ctrlAsteroids.asteroidsCreate);

router.get('/asteroids/:asteroidid', ctrlAsteroids.asteroidsReadOneById);
router.get('/asteroids/:dailyastid/asteroidobject/:asteroidid', ctrlAsteroids.asteroidsReadOne);

//Comments
router.get('/comments/:asteroidid', ctrlComments.commentReadAll);
router.post('/comments', ctrlComments.commentsCreate);

router.put('/comments/:commentid', ctrlComments.commentsUpdateOne);
router.delete('/comments/:commentid', ctrlComments.commentsDeleteOne);
module.exports = router;
