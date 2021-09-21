import app from '@src/config/app';
import supertest from 'supertest';

let testServer: supertest.SuperTest<supertest.Test>;

beforeAll(async () => {
  testServer = supertest(app);
});

describe('Testing', () => {
  test('Should get status 200', async () => {
    const { status } = await testServer.get('/users');
    expect(status).toBe(200);
  });
});
