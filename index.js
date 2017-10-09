const port = 3000 || process.env.PORT;
const config = require('./config/config');
const database = require('./config/database.config');
const express = require('express');

let app = express();
let environment = process.env.MONGOLAB_URI || 'development';

database(config[environment]);
require('./config/express')(app, config[environment]);
require('./config/routes')(app);
require('./config/passport')();

app.listen(port);