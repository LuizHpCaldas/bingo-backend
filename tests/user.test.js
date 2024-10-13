// tests/user.test.js

const request = require('supertest');
const app = require('../index'); // Ajuste o caminho se necessário

describe('POST /api/users/login', () => {
  it('should login an existing user', async () => {
    const response = await request(app)
      .post('/api/users/login')
      .send({
        username: 'testUser',
        password: 'testPassword',
      });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});
