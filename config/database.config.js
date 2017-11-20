const mongoose = require('mongoose');
const utils = require('../utils');
mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(config.connectionString, {
        useMongoClient: true
    });

    let database = mongoose.connection;
    
    database.on('error', (err) => {
        utils.error(err);
    });
    
    database.once('open', (err) => {
        utils.error(err);
        console.log('Connected!');
    });


    require('../models/Product');
    require('../models/Category');
    require('../models/User').seedAdminUser();
};