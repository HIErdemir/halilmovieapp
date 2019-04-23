const express       = require('express');
const bodyParser    = require('body-parser');
const apiv1         = require('./routes/apiv1');
const apiv2         = require('./routes/apiv2');
const logger        = require('tracer').colorConsole();


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Middelware, logging voor alle request
app.all('*', function (req, res, next) {
    //logger.info('%s', req.hostname)
    next();
});

// Routing with versions
app.use('/apiv1', apiv1);
app.use('/apiv2', apiv2);

// ECMA 6
const port = 8080;
const server = app.listen(port, () => {
    console.log("Hi students of I4, the magic happens ar port " + server.address().port);
});

module.exports = app;
