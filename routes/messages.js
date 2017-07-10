const express = require('express');
const router = express.Router();



/* GET messages list. */
router.get('/', function(req, res, next) {
    res.json({
       message: 'Hello Annie'
    });
});

router.post('/add', function (req, res, next) {
    return res.json({
        message: req.body.message
    })
});

module.exports = router;
