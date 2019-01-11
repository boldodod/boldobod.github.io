const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');


let should = chai.should();
chai.use(chaiHttp);

describe('users', () => {
  afterEach((done) => {
    done();
  });

  describe('userRoutes', () => {
    const request = chai.request(app);

    it('it should GET all users', (done) => {
      request.get('/users/:id')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });
  
  describe('userRoutes', () => {
    const request = chai.request(app);

    it('it should GET a particular user', (done) => {
      request.get('/users/:id')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });

  describe('userRoutes', () => {
    const request = chai.request(app);

    it('it should POST a user to users', (done) => {
      request.post('/users')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });

  describe('userRoutes', () => {
    const request = chai.request(app);

    it('it should PATCH a particular user', (done) => {
      request.patch('/users/:id'+req.users.id)
      .send({ 'name': 'Frank' })
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('Updated');
          res.body.should.have.property('name');
          res.body.should.have.property('id');
        done();      
      });
    });
  });

  describe('userRoutes', () => {
    const request = chai.request(app);

    it('it should DELETE a particular user', (done) => {
      request.delete('/users/:id')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });

});