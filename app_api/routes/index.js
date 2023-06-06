const express = require('express');
const router = express.Router();
const ctrlComments = require('../controllers/comments');
const ctrlAsteroids = require('../controllers/asteroids');
const ctrlUs = require('../controllers/users');
var middleware = require('../controllers/middleware'); 



// Asteroids 
router.get('/asteroids', ctrlAsteroids.asteroidsReadAll);
router.post('/asteroids', ctrlAsteroids.asteroidsCreate);

router.get('/asteroids/:asteroidid', ctrlAsteroids.asteroidsReadOneById);

//Comments
router.get('/comments/:asteroidid',middleware.ensureAuthenticated ,ctrlComments.commentReadAll);
router.post('/comments', middleware.ensureAuthenticated, ctrlComments.commentsCreate);

router.put('/comments/:commentid', ctrlComments.commentsUpdateOne);
router.delete('/comments/:commentid', ctrlComments.commentsDeleteOne);

//Users
router.post('/auth/signup', ctrlUs.signup); 
router.post('/auth/login', ctrlUs.login);

module.exports = router;


