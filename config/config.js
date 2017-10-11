const path = require('path');

module.exports = {
    development: {
        connectionString: 'mongodb://localhost:27017/shop-stop-db' || process.env.PROD_MONGODB,
        rootPath: path.normalize(path.join(__dirname, '../'))
    },
    production: {

    }
};