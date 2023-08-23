import { SNSQueueRouter } from '@coaktion/evolutty';

import config from './config';
import { MySQSHandler } from './handlers';

const routes = [
  {
    routeType: SNSQueueRouter,
    routeParams: {
      accessKeyId: config.sqs.accessKeyId,
      secretAccessKey: config.sqs.secretAccessKey,
      endpoint: config.sqs.endpoint,
      region: config.sqs.region,
      visibilityTimeout: config.sqs.visibilityTimeout
    },
    handler: MySQSHandler,
    queueName: config.queueNameSQS
  }
];

export default routes;
