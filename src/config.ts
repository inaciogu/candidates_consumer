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
  queueNameSQS: process.env.QUEUE_NAME_SQS,
  sentryDsn: process.env.SENTRY_DSN
};

export default config;
