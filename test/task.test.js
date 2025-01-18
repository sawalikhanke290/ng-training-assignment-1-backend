import * as chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'supertest';

chai.use(chaiHttp);

import { app } from '../app.js'; 

const { expect } = chai;

describe('Task API Tests', function () {
  it('should create a new task', function (done) {
    request('http://localhost:5000')  // Replace with your server URL
      .post('/task')  // Replace with your actual API endpoint for creating tasks
      .send({ title: 'New Task', description: 'Test task description' })  // Sample task data
      .expect(201)  // Expecting 201 status code for creation
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).to.have.property('title').eql('New Task');
        done();
      });
  });

  it('should retrieve all tasks', function (done) {
    request('http://localhost:5000')
      .get('/tasks')  // Replace with your actual API endpoint for retrieving tasks
      .expect(200)  // Expecting 200 status code
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});