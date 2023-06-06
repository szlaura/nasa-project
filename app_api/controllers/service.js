var jwt = require('jsonwebtoken'); 
var moment = require('moment'); 
var config = require('../config/config'); 

exports.createToken = function(user) { 
  var payload = {
    sub: user, 
    iat: moment().unix(), 
    exp: moment().add(2, "minutes").unix(), 
  };
  return jwt.sign(payload, config.TOKEN_SECRET); 
};