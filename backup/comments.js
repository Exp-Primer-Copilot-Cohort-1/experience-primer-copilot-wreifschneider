// Create web server

// Import modules

import express from 'express';

var router = express.Router();

function createServer() {
    var app = express();

    app.use(express.static('public'));

    app.use('/api', router);

    return app;
}