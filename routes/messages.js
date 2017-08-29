const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');
const usersController = require('../controllers/usersController');

/* GET messages list. */
router.get('/', function(req, res, next) {
    console.log('route', messagesController.getMessages());
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

router.get('/users', function(req, res, next) {
    res.json({
        users: usersController.getUsers()
    });
});

module.exports = router;
