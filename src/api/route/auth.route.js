const express = require('express');

const router = express.Router();

router.post('/login', attemptlogin);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);



module.exports = router;