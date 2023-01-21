const express = require('express');
const router = express.Router();

const userRoute = require('./route/user.route');
const messegeRoute = require('./route/message.route');
const authRoute = require('./route/auth.route');

router.use('/user', userRoute);
router.use('/messege', messegeRoute);
router.use('/auth', authRoute);


module.exports = router;