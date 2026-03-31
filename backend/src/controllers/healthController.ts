import { Request, Response } from 'express';

export const health = (_req: Request, res: Response) => {
  res.json({ ok: true, service: 'hackcoder-academy-api', timestamp: new Date().toISOString() });
};
