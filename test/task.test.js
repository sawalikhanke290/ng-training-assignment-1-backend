import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
import Task from '../models/taskModel.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('Task API Tests', () => {
  beforeEach(async () => {
    await Task.deleteMany({});
  });

  it('should create a new task', async () => {
    const res = await chai.request(app)
      .post('/api/task')
      .send({ title: 'Test Task', description: 'Test Description' });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('title', 'Test Task');
  });

  it('should retrieve all tasks', async () => {
    const res = await chai.request(app).get('/api/tasks');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });
});
