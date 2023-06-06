var jwt = require('jsonwebtoken'); 
var moment = require('moment');
var config = require('../config/config');

// exports.ensureAuthenticated = (req, res, next) =>{
//   if(!req.headers.authorization) { 
//     return res
//     .status(403)
//     .send({message: "Petición sin cabecera de autorización"});
//   }

//   var token = req.headers.authorization.split(" ")[1]; 
//   var payload = jwt.verify(token, config.TOKEN_SECRET, function(err, payload) {
//     if (err) {
//       switch (err.name) { 
//         case 'JsonWebTokenError':
//           return res.status(401).send({message: "Signatura incorrecta"});
//         case 'TokenExpiredError':
//           return res.status(401).send({message: "Token caducado"});
//         default:
//           return res.status(401).send(err);
//       }
//     }
//     req.user = payload.sub; 
//     next(); 
//   });
// }

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
      res.status(403).send('token Unavailable!!')
  }
}