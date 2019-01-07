const express = require('express');

const router = express();

router.use('/users', require('./users'));

router.use('/meetups', require('./meetups'));

module.exports = router;
