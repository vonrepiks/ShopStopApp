const port = 3000;
const config = require('./config/config');
const database = require('./config/database.config');
const express = require('express');

let app = express();
let environment = process.env.NODE_enviroment || 'development';

database(config[environment]);
require('./config/express')(app, config[environment]);
require('./config/routes')(app);
require('./config/passport')();

app.listen(port);