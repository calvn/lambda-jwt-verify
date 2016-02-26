require('dotenv').config();
var jwt = require('jsonwebtoken');

var secret = process.env.JWT_SECRET

exports.handler = function(event, context) {
  if(event.authorizationToken && event.authorizationToken.split(' ')[0] === 'Bearer') {
    var secretBuf = new Buffer(secret, 'base64');
    var idToken = event.authorizationToken.split(' ')[1];
    var currentTime = Math.floor(Date.now() / 1000);
    jwt.verify(idToken, secretBuf, function(err, decoded) {
      if (err) {
        console.log('failed jwt verify: ', err, 'auth: ', idToken);
        return context.fail('authorization failure');
      } else {
        console.log('authorized:', decoded);
        return context.succeed(decoded);
      }
    });
  } else {
    console.log('invalid authorization token or header', event.authorizationToken);
    return context.fail('authorization failure');
  }
};
