const express = require('express');
const { saveMessage, getAllMessages, deleteMessage } = require('../controller/message.controller');
const router = express.Router();

router.post('/', saveMessage);
router.get('/', getAllMessages,);
router.delete('/:id', deleteMessage);

module.exports = router;