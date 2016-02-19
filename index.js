require('dotenv').config();
var jwt = require('jsonwebtoken');

var secret = process.env.JWT_SECRET

exports.handler = function(event, context) {
  if(event.authorizationToken) {
    var secretBuf = new Buffer(secret, 'base64');
    jwt.verify(event.authorizationToken, secretBuf, function(err, decoded) {
      console.log('jwt function')
      if(err) {
        console.log('failed jwt verify: ', err, 'auth: ', event.authorizationToken);
        return context.fail('authorization failure');
      } else {
        console.log('authorized:', decoded);
        return context.succeed(decoded)
      }
    });
  } else {
    console.log('invalid authorization token', event.authorizationToken);
    return context.fail('authorization failure');
  }
};
