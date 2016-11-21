var express = require("express");
var app = express();
var routes = require('./routes/index');
var cors = require('cors');
var jwt = require('express-jwt');

var authCheck = jwt({
    secret: new Buffer('ryTBCu5qOXR4lVBvTA3f34B5uiVMN03FTnGQjiYEcspNhGh-CGcYTz4de8yoC9Kw', 'base64'),
    audience: 'HvnsjcXfZl6zll205KFOKYIjImJXC4vl'
});



app.set('PORT', 4000);

// app.use('/api/', routes);

app.use(cors());

app.get('/api/public', function(req, res){
        console.log("home");
        res
            .status(200)
            .json({"message": "hello dont need to be auth"});
    });

app.get('/api/private', authCheck , function(req, res){
        console.log("private");
        res
            .status(200)
            .json({"message": "private endpoint"});
    });

var server = app.listen(app.get('PORT'), function(){
    var port = server.address().port;
    console.log("server API SALEM is running on " + port);
});