const express = require('express');

const router = express.Router();

global.users = [
  {
//     id: 1,
//     firstname: 'Simeon',
//     lastname: 'Obodozie',
//     othername: 'Obinna',
//     email: 'cmeonie@gmail.com',
//     phoneNumber: '08038047281',
//     username: 'cmeonie',
//     registered: '04-09-2018',
//     isAdmin: true
//   },

//   {
//     id: 2,
//     firstname: 'Sim',
//     lastname: 'Obod',
//     othername: 'Obi',
//     email: 'meonie@gmail.com',
//     phoneNumber: '08038047281',
//     username: 'cmeonie',
//     registered: '04-09-2018',
//     isAdmin: false
//   },

  {
    id: 3,
    firstname: 'Ngozi',
    lastname: 'Obod',
    othername: 'Vivian',
    email: 'vivie@gmail.com',
    phoneNumber: '08033047291',
    username: 'vinivi',
    registered: '04-10-2018',
    isAdmin: false
  }
];

module.exports = router;