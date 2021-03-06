const express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '../public/views');

// Middle ware for using the public folder
app.use(express.static('public'));

require('./database.js');
// exporting the app
require('./routes')(app);

module.exports = app;
