process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

/*
  * Test the /GET route
  */
describe('/GET Basic Test', () => {
      it('it should GET all the Basic Test API', (done) => {
        chai.request(server)
            .get('/api/basic/register')
            .end((err, res) => {
                res.status.should.be.equal(200);
                res.text.should.be.equal("register");
            done();
            })
      });
  });
