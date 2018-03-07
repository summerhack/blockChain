var crypto = require('crypto');

var sha256 = crypto.createHash('sha256');
sha256.update('hellobike');

console.log(sha256.digest('hex'));