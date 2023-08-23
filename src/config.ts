import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  sqs: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    endpoint: process.env.AWS_ENDPOINT,
    region: process.env.AWS_REGION,
    visibilityTimeout: parseInt(process.env.SQS_VISIBILITY_TIMEOUT)
  },
  queueNameSQS: process.env.QUEUE_NAME_SQS,
  sentryDsn: process.env.SENTRY_DSN
};

export default config;
