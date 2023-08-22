import { BullMQRouter, SQSRouter } from '@coaktion/evolutty';

import config from './config';
import { MyBullMQHandler, MySQSHandler } from './handlers';

const routes = [
  {
    routeType: SQSRouter,
    routeParams: {
      accessKeyId: config.sqs.accessKeyId,
      secretAccessKey: config.sqs.secretAccessKey,
      endpoint: config.sqs.endpoint,
      region: config.sqs.region,
      visibilityTimeout: config.sqs.visibilityTimeout
    },
    handler: MySQSHandler,
    queueName: config.queueNameSQS
  },
  {
    routeType: BullMQRouter,
    handler: MyBullMQHandler,
    queueName: config.queueNameBullMQ
  }
];

export default routes;
