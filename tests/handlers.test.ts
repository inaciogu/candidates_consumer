import { MySQSHandler } from '../src/handlers';

const payload = {
  content: {
    id: 1,
    name: 'test'
  },
  metadata: {
    token: 'token'
  }
};

describe('MySQSHandler', () => {
  it('mock SQS and return a promise', async () => {
    const classHandler = new MySQSHandler('teste', {});
    const result = await classHandler.handle(payload.content, payload.metadata);
    expect(result).toBe(true);
  });
});
