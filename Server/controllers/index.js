const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  console.log('Nice');
  next();
});

router.get('/', (req, res) => res.json({
  users: global.users
}));

router.use('/users', require('./users'));

// router.use('/meetups', require('./meetups'));

module.exports = router;