const path = require('path');

module.exports = {
    development: {
        connectionString: process.env.PROD_MONGODB,
        rootPath: path.normalize(path.join(__dirname, '../'))
    },
    production: {

    }
};