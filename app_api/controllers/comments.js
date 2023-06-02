const mongoose = require('mongoose');
const Comments = mongoose.model('Comments');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
  };


/* GET api/comments/:asteroidid */
const commentReadAll = (req, res) => {
  Comments
    .find({})
    .where('asteroidId').equals(req.params.asteroidid)
    .exec((err, comments) => {
        if (!comments) {
          sendJSONresponse(res, 404, {"message" : "comments not found"});
        } else if (err) { sendJSONresponse(res, 404, err);  }
        else { 
          sendJSONresponse(res, 200, comments);
        }
  });     
};

/* POST api/comments */
const commentsCreate = (req, res) => {
  Comments.create(req.body,   
   (err, comments) => {
          if (err) { sendJSONresponse(res, 404, err); } else 
                  { sendJSONresponse(res, 201, comments); } 
    });
};

/* PUT api/comments/:commentid */
const commentsUpdateOne = (req, res) => {
  if (!req.params.commentid) {
    sendJSONresponse(res, 406, {"message": "Not found, commentid is required"});
  }
  Comments
    .findByIdAndUpdate(req.params.commentid)
    .exec((err, comment) => {
          if (!comment) {
              sendJSONresponse(res, 500, {"message": "commentid not found"});
            } else if (err) {
                sendJSONresponse(res, 400, err);
              }
        comment.author = req.body.author;
        comment.commentText = req.body.commentText;
        comment.save((err, comment) => {
          if (err) {
            sendJSONresponse(res, 403, err);
          } else {
            sendJSONresponse(res, 200, comment);
          }
        });
      }); 
};

/* DELETE /api/comments/:commentid */
const commentsDeleteOne = (req, res) => {
  const commentid = req.params.commentid;
  if (commentid) {
    Comments
      .findByIdAndDelete(req.params.commentid)
      .exec((err) => {
          if (err) {
            sendJSONresponse(res, 404, err);
          }
          console.log("Comment id " + commentid + " deleted");
          sendJSONresponse(res, 204, null);
        }
    );
  } else {
    sendJSONresponse(res, 404, {"message": "No commentid"});
  }
};

module.exports = {
  commentReadAll,
  commentsCreate,
  commentsUpdateOne,
  commentsDeleteOne
};