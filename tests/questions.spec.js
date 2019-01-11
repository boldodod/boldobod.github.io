const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');


let should = chai.should();
chai.use(chaiHttp);

describe('questions', () => {
  afterEach((done) => {
    done();
  });

  describe('questionRoutes', () => {
    const request = chai.request(app);

    it('it should GET all questions', (done) => {
      request.get('/questions/:id')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });
  
  describe('questionRoutes', () => {
    const request = chai.request(app);

    it('it should GET a particular question', (done) => {
      request.get('/questions/:id')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });

  describe('questionRoutes', () => {
    const request = chai.request(app);

    it('it should POST a question to questions', (done) => {
      request.post('/questions')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });

  describe('questionRoutes', () => {
    const request = chai.request(app);

    it('it should PATCH a particular question', (done) => {
      request.patch('/questions/:id'+req.questions.id)
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

  describe('questionRoutes', () => {
    const request = chai.request(app);

    it('it should DELETE a particular question', (done) => {
      request.delete('/questions/:id')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });

});