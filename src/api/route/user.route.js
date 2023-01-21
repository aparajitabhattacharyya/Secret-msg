const express = require('express');
const router = express.Router();
const { saveUser, getUser, deleteUser, updateUser } = require('../controller/user.controller');

router.post('/', saveUser);
router.get('/', getUser);
router.put('/', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;