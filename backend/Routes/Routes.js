

const express = require('express');
const router = express.Router();
const messageController = require('../Controller/MessageController');

// Define routes for sending and fetching messages
router.post('/send', messageController.sendMessage);
router.get('/fetch', messageController.getMessages);

module.exports = router;
