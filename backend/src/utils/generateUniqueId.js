const crypto = require('crypto');

// export default function 
// }
module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
}