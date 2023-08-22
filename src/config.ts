import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  sqs: {
    accessKeyId: process.env.SQS_ACCESS_KEY_ID,
    secretAccessKey: process.env.SQS_SECRET_ACCESS_KEY,
    endpoint: process.env.SQS_ENDPOINT,
    region: process.env.SQS_REGION,
    visibilityTimeout: parseInt(process.env.SQS_VISIBILITY_TIMEOUT)
  },
  bullmq: {
    connection: {
      host: process.env.BULLMQ_HOST,
      port: process.env.BULLMQ_PORT,
      password: process.env.BULLMQ_PASSWORD
    }
  },
  queueNameSQS: process.env.QUEUE_NAME_SQS,
  queueNameBullMQ: process.env.QUEUE_NAME_BULLMQ,
  sentryDsn: process.env.SENTRY_DSN
};

export default config;
