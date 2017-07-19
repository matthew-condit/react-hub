const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

/* GET messages list. */
router.get('/', function(req, res, next) {
    console.log('route', messagesController.getMessages());
    res.json({
       messages: messagesController.getMessages()
    });
});

router.post('/add', function (req, res, next) {
    console.log('hehe', req.body.message);
    messagesController.addMessage(req.body.message);
    res.json({
        status: "success"
    });
});

module.exports = router;
