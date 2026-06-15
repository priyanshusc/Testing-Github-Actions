// src/server.test.js
const request = require('supertest');
const app = require('./server.js'); // Import our express app configuration

describe('POST /api/register', () => {

  test('should block registration if password is weak', async () => {
    // Supertest shoots a fake POST request into our Express app
    const response = await request(app)
      .post('/api/register')
      .send({
        email: 'test@example.com',
        password: 'weak' // This will fail our validatePassword function
      });

    // We expect the server to kick this request back with a 400 Bad Request status
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Password does not meet requirements');
  });

  test('should allow registration with valid credentials', async () => {
    const response = await request(app)
      .post('/api/register')
      .send({
        email: 'test@example.com',
        password: 'ValidPassword123' // This passes our validation rules
      });

    // We expect a 201 Created status code
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toContain('successfully');
  });

});