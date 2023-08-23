import { MongoClient } from 'mongodb';

import { Candidate } from './candidate';

export class CandidateRepository {
  private readonly mongoClient: MongoClient;

  constructor() {
    this.mongoClient = new MongoClient(process.env.MONGO_DB_URI, {
      
    });
  }

  async save(candidate: Candidate): Promise<Candidate> {
    await this.mongoClient.connect();
    const db = this.mongoClient.db(process.env.MONGO_DB_NAME);
    const collection = db.collection('candidates');
    const { insertedId } = await collection.insertOne(candidate);

    return {
      id: insertedId.toString(),
      name: candidate.name,
      email: candidate.email,
      desiredPosition: candidate.desiredPosition
    };
  }

  async find(): Promise<Candidate[]> {
    await this.mongoClient.connect();
    const db = this.mongoClient.db(process.env.MONGO_DB_NAME);
    const collection = db.collection<Candidate>('candidates');
    const candidates = await collection.find().toArray();
    return candidates.map(candidate => ({
      id: candidate._id.toString(),
      name: candidate.name,
      email: candidate.email,
      desiredPosition: candidate.desiredPosition
      }));
  }
}
