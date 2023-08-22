import { EvoluttyManager } from '@coaktion/evolutty';
import { RewriteFrames } from '@sentry/integrations';
import * as Sentry from '@sentry/node';
import * as dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  integrations: [
    new RewriteFrames({
      root: process.cwd()
    })
  ],
  ignoreErrors: [] // Add errors to ignore here
});

const manager = new EvoluttyManager(routes);
manager.start();
