// app.test.js
const supertest = require('supertest');
const app = require('./index');

describe('GET /', () => {
  test('responds with 200 status and "Hello, World!"', async () => {
    const response = await supertest(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
