var express = require("express");
var router = express.Router();
var jwt = require('express-jwt');
var cors = require('cors');

var authCheck = jwt({
    secret: new Buffer('ryTBCu5qOXR4lVBvTA3f34B5uiVMN03FTnGQjiYEcspNhGh-CGcYTz4de8yoC9Kw', 'base64'),
    audience: 'HvnsjcXfZl6zll205KFOKYIjImJXC4vl'
});

app.use(cors());

router
    .route('/public')
    .get(function(req, res){
        console.log("home");
        res
            .status(200)
            .json({"message": "hello dont need to be auth"});
    });

router
    .route('/private')
    .get(authCheck, function(req, res){
        console.log("private");
        res
            .status(200)
            .json({"message": "private endpoint"});
    });

module.exports = router;