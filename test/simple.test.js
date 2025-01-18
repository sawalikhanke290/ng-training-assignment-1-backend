import * as chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'supertest';


chai.use(chaiHttp);

describe('Simple Test', () => {
    it('should perform a simple request', (done) => {
        chai.request('http://localhost:5000') // Replace with your server URL
            .get('/tasks')
            .end((err, res) => {
                chai.assert.isTrue(res.status === 200);
                done();
            });
    });
});
