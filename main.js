// Get the server js file from app foler
var app = require('./app/server');
var port = process.env.PORT || 8080;
// Start the server

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});