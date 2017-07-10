var express = require('express');
var router = express.Router();

/* GET messages list. */
router.get('/', function(req, res, next) {
    res.json({
       message: 'Hello Annie'
    });
});

module.exports = router;
