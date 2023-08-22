import { ConnectionOptions } from 'bullmq';
import Redis from 'ioredis-mock';

import { MyBullMQHandler, MySQSHandler } from '../src/handlers';

const payload = {
  content: {
    id: 1,
    name: 'test'
  },
  metadata: {
    token: 'token'
  }
};

describe('MyBullMQHandler', () => {
  let classHandler: MyBullMQHandler;
  beforeEach(() => {
    jest.useFakeTimers();
    const connection = {
      createClient: () => new Redis()
    } as ConnectionOptions;

    classHandler = new MyBullMQHandler('teste', () => {}, { connection });
  });

  afterEach(() => {
    classHandler.close();
  });

  it('mock Job and return a promise', async () => {
    const result = await classHandler.handle(payload.content, payload.metadata);
    expect(result).toBe(true);
  });
});

describe('MySQSHandler', () => {
  it('mock SQS and return a promise', async () => {
    const classHandler = new MySQSHandler('teste', {});
    const result = await classHandler.handle(payload.content, payload.metadata);
    expect(result).toBe(true);
  });
});
