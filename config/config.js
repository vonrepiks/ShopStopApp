const path = require('path');

module.exports = {
    development: {
        connectionString: process.env.MONGOLAB_URI,
        rootPath: path.normalize(path.join(__dirname, '../'))
    },
    production: {

    }
};