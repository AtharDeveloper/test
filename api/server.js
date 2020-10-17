
const bodyParser = require('body-parser');
const express = require('express');

const cors = require('cors');
const path = require('path');
const http = require('http');


const { PORT } = require('./src/config/config');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));

// cors midddleware
app.use(cors());

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || PORT;
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port.
 */

server.listen(port,console.log(`server is running.. on port :${port}`));

app.use(express.static(path.join(__dirname, './src/views')));
require('./src/routes/routes')(app);
app.use('/', (req, res) => {
    res.send(`<div align="center" style =""><h1> WELCOME IN SERVER. </h1></div>`)
});

