import { Request, Response } from 'express';

// Controllers hold the logic for a route: read req, send res.
export const getHealth = (req: Request, res: Response) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
};
