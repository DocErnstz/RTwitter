import { createMocks } from 'node-mocks-http';
import handleContact from '../pages/api/contacts';

describe('/api/contacts', () => {
  test('returns 200 status', async () => {
    const data = {
      firstName: 'a',
      lastName: "b",
      email: "c",
      avatar: "d"
    }
    const { req, res } = createMocks({
      method: 'POST',
      body: JSON.stringify(data)
    });
    await handleContact(req, res);
    expect(res._getStatusCode()).toBe(200);
  });
});