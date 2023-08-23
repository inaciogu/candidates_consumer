import * as express from 'express';
import * as cors from 'cors';
import { logging } from '@coaktion/evolutty';
import { CandidatesController } from './controllers';

export class WebServer {
  private readonly app: express.Application;
  private readonly candidatesController: CandidatesController;

  constructor() {
    this.app = express()
    this.candidatesController = new CandidatesController();

    this.app.use(express.json());
    this.app.use(cors())

    this.addRoutes();
  }

  async start() {
    this.app.listen(process.env.WEB_SERVER_PORT, () => {
      logging.info(`Server is running on port ${process.env.WEB_SERVER_PORT}`);
    });
  }

  addRoutes() {
    this.app.get('/candidates', this.candidatesController.find.bind(this.candidatesController));
    this.app.post('/candidates', this.candidatesController.create.bind(this.candidatesController));
  }
}