var jwt = require('jsonwebtoken'); 
var moment = require('moment');
var config = require('../config/config');

exports.isAuthenticate = (req,res,next) =>{
  let isHeader = req.headers.authorization
  if(isHeader){
      let token = isHeader.split(' ')[1]
      jwt.verify(token,config.TOKEN_SECRET,(err,decode)=>{
          if(err){
              console.log(err)
              res.status(401).json(err)
          }
          else{
              req.user = decode.username
              next()
          }
      })
  }
  else{
      res.status(403).send('Token unavailable!')
  }
}