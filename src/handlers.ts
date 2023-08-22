import { BullMQHandler, SQSHandler, logging } from '@coaktion/evolutty';

export class MySQSHandler extends SQSHandler {
  async handle(content: object, metadata: object): Promise<boolean> {
    logging.info('content', content);
    logging.info('metadata', metadata);
    return true;
  }
}

export class MyBullMQHandler extends BullMQHandler {
  async handle(content: object, metadata: object): Promise<boolean> {
    logging.info('content', content);
    logging.info('metadata', metadata);
    return true;
  }
}
