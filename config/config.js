const path = require('path');

module.exports = {
    development: {
        connectionString: 'mongodb://admin:Admin12@ds113445.mlab.com:13445/shop-stop-db',
        rootPath: path.normalize(path.join(__dirname, '../'))
    },
    production: {

    }
};