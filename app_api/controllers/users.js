const mongoose = require('mongoose');
const Comments = mongoose.model('Users');
var service = require('./service');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
  };


const signup = (req, res) =>{ 
  Comments
  .create({
    username: req.body.username,
    email:req.body.email,
    password: req.body.password
  }, (err, user) => { 
    if (err) {
      return res.status(400).send(err); 
    }
    return res
    .status(200)
    .send({token: service.createToken(req.body.username)}); 
  });
};

const login = (req, res) =>{ 
  if (req.body.username && req.body.password) {
    Comments
    .count({
      username: req.body.username, 
      password: req.body.password}) 
    .exec(function(err, user) {
      if (!user) {
        return res.status(401).send({"message": "Invalid user and/or password"}); 
      } else if (err) {
        return res.status(404).send(err); 
      }
      return res.status(200).send({token: service.createToken(req.body.username)}); 
    });
  } else {
    return res.status(401).send({"message": "Invalid user and/or password"}); 
  }
};


module.exports = {
  signup,
  login
};