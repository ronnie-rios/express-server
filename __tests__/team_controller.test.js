const app = require('../app');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
//lets us use the http request
chai.use(chaiHttp)

describe('routes /team', () => {
    describe('get /teams', () => {
        it('should return all teams', (done) => {
            //hits our server
            chai.request(app)
            //get our endpoint
                .get('/teams')
                .end((err, res) => {
                //the actual test you implment
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    done()
                });
        });
    });

    describe('get /teams/id not found', () => {
        it('should return an err', (done) => {
            chai.request(app)
            .get('/teams/bad')
            .end((err, res) => {
                expect(res).to.be.json;
                expect(res).to.have.status(404);
                done();
            });
        });
    });
});