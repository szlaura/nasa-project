// const mongoose = require('mongoose');
// const Comm = mongoose.model('Comments');

// const sendJSONresponse = (res, status, content) => {
//     res.status(status);
//     res.json(content);
//   };

//   /* GET api/comments */
// const getComments = (req, res) => {
//     Comm
//       .find({})
//       .exec((err, comments) => {
//           if (!comments) {
//             sendJSONresponse(res, 404, {"message" : "comments not found"});
//           } else if (err) { sendJSONresponse(res, 404, err);  }
//           else { 
//             sendJSONresponse(res, 200, asteroids);
  //         }
  //   });     
  // };