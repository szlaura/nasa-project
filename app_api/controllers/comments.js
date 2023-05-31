const mongoose = require('mongoose');
const Ast = mongoose.model('Asteroids');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
  };


/* POST a new comment, providing an asteroid */
/* /api/asteroids/:asteroidid/comments */
const commentCreate = (req, res) => {
  const asteroidid = req.params.asteroidid;
  if (asteroidid) {
    Ast
      .findById(asteroidid)
      .select('comments')
      .exec((err, asteroid) => {
          if (err) {
            sendJSONresponse(res, 400, err);
          } else {
            doAddComment(req, res, asteroid);
          }
        }
    );
  } else {
    sendJSONresponse(res, 404, {"message": "Asteroid not found"});
  }
};

const doAddComment = (req, res, asteroid) => {
  if (!asteroid) {
    sendJSONresponse(res, 404, {"message" : "Asteroid not found"});
  } else {
    asteroid.comments.push({
      author: req.body.author,
      text: req.body.commentText
    });
    asteroid.save((err, asteroid) => {
      if (err) {
        sendJSONresponse(res, 400, err);
      } else {
        let thisComment = asteroid.comments[asteroid.comments.length - 1];
        sendJSONresponse(res, 201, thisComment);
      }
    });
  }
};

/* PUT /api/asteroid/:asteroidid/comments/:commentid */
const commentsUpdateOne = (req, res) => {
  if (!req.params.asteroidid || !req.params.commentid) {
    sendJSONresponse(res, 404, {"message": "Not found, asteroidid and commentid are both required"});
  }
  Ast
    .findById(req.params.asteroidid)
    .select('comments')
    .exec((err, asteroid) => {
        if (!asteroid) {
          sendJSONresponse(res, 404, {"message": "asteroid not found"});
        } else if (err) {
          sendJSONresponse(res, 400, err);
        }
        if (asteroid.comments && asteroid.comments.length > 0) {
          thisComment = asteroid.comments.id(req.params.commentid);
          if (!thisComment) {
            sendJSONresponse(res, 404, {"message": "commentid not found"});
          } else {
            thisComment.author = req.body.author;
            thisComment.commentText = req.body.commentText;
            asteroid.save((err, asteroid) => {
              if (err) {
                sendJSONresponse(res, 404, err);
              } else {
                sendJSONresponse(res, 200, thisComment);
              }
            });
          }
        } else {
          sendJSONresponse(res, 404, {"message": "No comment to update"});
        }
      });
};

/* DELETE /api/asteroids/:asteroidid/comments/:commentid */
const commentsDeleteOne = (req, res) => {
  if (!req.params.asteroidid || !req.params.commentid) {
    sendJSONresponse(res, 404, {"message": "Not found, asteroidid and commentid are both required"});
  }
  Ast
    .findById(req.params.asteroidid)
    .select('comments')
    .exec((err, asteroid) => {
        if (!asteroid) {
          sendJSONresponse(res, 404, {"message": "asteroidid not found"});
        } else if (err) {
          sendJSONresponse(res, 400, err);
        }
        if (asteroid.comments && asteroid.comments.length > 0) {
          if (!asteroid.comments.id(req.params.commentis)) {
            sendJSONresponse(res, 404, {"message": "commentid not found"});
          } else {
            asteroid.comments.id(req.params.commentid).remove();
            asteroid.save((err) => {
              if (err) {
                sendJSONresponse(res, 404, err);
              } else {
                sendJSONresponse(res, 204, null);
              }
            });
          }
        } else {
          sendJSONresponse(res, 404, {"message": "No comment to delete"});
        }
      }
  );
};

module.exports = {
  commentCreate,
  commentsUpdateOne,
  commentsDeleteOne 
};