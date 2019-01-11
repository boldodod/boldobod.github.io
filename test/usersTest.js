import { assert } from 'chai';

import users from '../Server/controllers/users';

describe('List of users', () => {
  it('should return list of all users', () => {
    const result = users();
    assert.equal(result, {
      id: 1,
      firstname: 'Simeon',
      lastname: 'Obodozie',
      othername: 'Obinna',
      email: 'cmeonie@gmail.com',
      phoneNumber: '08038047281',
      username: 'cmeonie',
      registered: '04-09-2018',
      isAdmin: true
    });
    if (error) { return users(error); }
  });
});
