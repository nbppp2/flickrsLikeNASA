// server.js
const express = require('express');
const path = require('path');
const app = express();


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/flickrsLikeNASA/index.html'));
});

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080, function () {
  console.log('Listening on port ' + this.address().port); //Listening on port 8888
});
