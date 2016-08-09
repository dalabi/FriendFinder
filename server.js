var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

var app = express();
var ANDRE = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

var htmlRoutes = require('./app/routing/html-routes');
var apiRoutes = require('./app/routing/api-routes');
htmlRoutes.getBackground(app);
htmlRoutes.getCss(app);
htmlRoutes.getRoot(app);
htmlRoutes.getSurvey(app);
apiRoutes.postFriends(app);
apiRoutes.getFriends(app);

app.use(express.static(__dirname + '/public'));

app.listen(ANDRE, function() {
  console.log("App listening on PORT: "  + ANDRE);
});