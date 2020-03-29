const crypto = require('crypto'); //metodo já vem com o node

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}