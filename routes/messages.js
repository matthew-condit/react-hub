const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

const state ={
    message : 'Hello Annie'
};

/* GET messages list. */
router.get('/', function(req, res, next) {
    res.json({
       messages: messagesController.getMessages()
    });
});

router.post('/add', function (req, res, next) {
    messagesController.addMessage(req.body.message);
    res.json({
        status: "success"
    });
});

module.exports = router;
