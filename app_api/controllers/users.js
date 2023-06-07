const mongoose = require('mongoose');
const Comments = mongoose.model('Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var config = require('../config/config');

/* POST api/auth/signup */
const signup = (req, res) =>{ 
  Comments
  .create({
    username: req.body.username,
    email:req.body.email,
    password: bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
  }, (err, user) => { 
    if (err) {
      return res.status(400).json(err); 
    }
    return res
    .status(200)
    .json(user); 
  });
};

/* POST api/auth/login */
const login = (req, res) =>{ 
  if (req.body.username && req.body.password) {
    Comments
    .findOne({username:req.body.username,})
    .exec((err,user)=>{
      if(err){
          res.status(400).json(err)
      }
      else{
          if(!user){
              console.log('invalid user')
              return res.status(401).send("User does not exist!")
          }
          if(bcrypt.compareSync(req.body.password,user.password)){
              console.log('user logged in!',user)
              let token = jwt.sign({username:user.username},config.TOKEN_SECRET,{expiresIn:300})
              res.status(201).json({loggedIn:true,token})
          }
          else{
              console.log('user login failed!',user)
              res.status(400).json('Unauthorized: Wrong password or username!')
          }  
      }
  })};
};


module.exports = {
  signup,
  login
};