const jwt = require('jsonwebtoken');

const secret = 'tfhvvgtfgjhj76ggi9t4er34';

const sign = payload => jwt.sign(payload, secret, {expiresIn: 86400});
const verify = token => jwt.verify(token, secret);

module.exports = {sign, verify}