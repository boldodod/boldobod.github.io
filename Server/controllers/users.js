const express = require('express');

const router = express.Router();

global.users = [
  {
    id: 1,
    firstname: 'Simeon',
    lastname: 'Obodozie',
    othername: 'Obinna',
    email: 'cmeonie@gmail.com',
    phoneNumber: '08038047281',
    username: 'cmeonie',
    registered: '04-09-2018',
    isAdmin: true
  }
];

router.get('/', (req, res) => res.json({
  users: global.users,
}));

module.exports = router;
