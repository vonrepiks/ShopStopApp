const path = require('path');

module.exports = {
    development: {
        connectionString:  process.env.PROD_MONGODB || 'mongodb://localhost:27017/shop-stop-db',
        rootPath: path.normalize(path.join(__dirname, '../'))
    },
    production: {

    }
};