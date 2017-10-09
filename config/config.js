const path = require('path');

module.exports = {
    development: {
        connectionString: 'mongodb://shop-stop-db:ico123@ds113925.mlab.com:13925/heroku_csc1hrvb',
        rootPath: path.normalize(path.join(__dirname, '../'))
    },
    production: {

    }
};