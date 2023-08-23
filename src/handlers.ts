import { SQSClientOptions, SQSHandler, logging } from '@coaktion/evolutty';
import { CandidateRepository } from './candidate.repository';

export class MySQSHandler extends SQSHandler {
  private readonly candidatesRepository: CandidateRepository;

  constructor(queueName: string, clientOptions: SQSClientOptions) {
    super(queueName, clientOptions);
    this.candidatesRepository = new CandidateRepository();
  }

  async handle(content: any, metadata: object): Promise<boolean> {
    try {
      logging.info('content', content);
      logging.info('metadata', metadata);
      
      await this.candidatesRepository.save({
        name: content.name,
        email: content.email,
        desiredPosition: content.position
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
