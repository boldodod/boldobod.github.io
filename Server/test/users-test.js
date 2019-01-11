const user = require('../controllers/users');

const expect = chai.expect;

chai.should();


describe('List of users', function () {
  it('should return list of all users', function () {
      [user: { 
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
     ]
  });
});