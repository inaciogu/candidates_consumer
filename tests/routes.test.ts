import { SQSRouter } from '@coaktion/evolutty';

import { MySQSHandler } from '../src/handlers';
import routes from '../src/routes';

describe('Routes', () => {
  it('should have a route', () => {
    expect(routes).toEqual([
      {
        routeType: SQSRouter,
        routeParams: {
          accessKeyId: 'accessKeyId',
          secretAccessKey: 'secretAccessKey',
          endpoint: 'http://localhost:4566',
          region: 'us-east-1',
          visibilityTimeout: 20
        },
        handler: MySQSHandler,
        queueName: 'queueNameSQS'
      }
    ]);
  });
});
