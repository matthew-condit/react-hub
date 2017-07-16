const express = require('express');
const router = express.Router();

const state ={
    message : 'Hello Annie'
};

/* GET messages list. */
router.get('/', function(req, res, next) {
    res.json({
       message: state.message
    });
});

router.post('/add', function (req, res, next) {
    state.message = req.body.message;
    res.json({
        result: "success"
    });
});

module.exports = router;
