import Request from 'supertest';
import { initializeConnection } from '../src/frameworks/db/postgres/initializeConnection';
import app from '../src/index';



beforeAll(async () => {
  await initializeConnection()
})
let request = Request(app);

describe('GET /api/user', () => {

  it('shuld return a 200', async () => {
    const response = await request.get('/user');
    expect(response.status).toBe(200);
  })

})

