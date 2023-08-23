import { Request, Response } from 'express';

import { CandidateRepository } from './candidate.repository';
import { logging } from '@coaktion/evolutty';

export class CandidatesController {
  private readonly candidateRepository: CandidateRepository;

  constructor() {
    this.candidateRepository = new CandidateRepository();
  }

  async create(req: Request, res: Response) {
    try {
      const { name, email, desiredPosition } = req.body;
      const candidate = {
        name,
        email,
        desiredPosition
      };
      const savedCandidate = await this.candidateRepository.save(candidate);

      return res.status(201).json(savedCandidate);
    } catch (error) {
      logging.info(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async find(_req: Request, res: Response) {
    try {
      const candidates = await this.candidateRepository.find();
      return res.status(200).json(candidates);
    } catch (error) {
      logging.info(error);
      return res.status(500).json({ error: error.message });
    }
  }
}
