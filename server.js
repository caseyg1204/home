const express = require('express');
const sslRedirect = require('heroku-ssl-redirect');
const path = require('path');
const port = process.env.PORT || 8080;
const compression = require('compression');
const app = express();
app.use(sslRedirect());
app.use(compression());

// serve static assets normally
app.use(express.static(__dirname + '/dist'));

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);
