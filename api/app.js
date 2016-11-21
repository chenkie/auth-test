var express = require("express");
var app = express();
var routes = require('./routes/index');

app.set('PORT', 4000);

app.use('/api/', routes);

var server = app.listen(app.get('PORT'), function(){
    var port = server.address().port;
    console.log("server API SALEM is running on " + port);
});