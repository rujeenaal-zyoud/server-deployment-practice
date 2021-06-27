'use strict';
const server = require ('./server');
require('dotenv').config();
//here after import server we will use start function that was exported 
server.start(process.env.PORT || 5005);