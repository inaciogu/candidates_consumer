import { EvoluttyManager } from '@coaktion/evolutty';
import * as dotenv from 'dotenv';

import routes from './routes';
import { WebServer } from './web-server';

dotenv.config();

const manager = new EvoluttyManager(routes);
const server = new WebServer();

server.start();
manager.start();
