import { Request, Response, Express } from 'express';
import { Redis } from 'ioredis';

export type MyContext = {
  redis: Redis;
  req: Request & { session: Express.Session };
  res: Response;
};
