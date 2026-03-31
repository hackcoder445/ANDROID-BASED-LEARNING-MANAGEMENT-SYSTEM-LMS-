import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { config } from '../config/env';

export type AuthRequest = Request & { userId?: string; role?: string };

export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const payload = jwt.verify(header.slice(7), config.jwtSecret) as { sub: string; role: string };
    req.userId = payload.sub;
    req.role = payload.role;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export const requireRole = (roles: string[]) => (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.role || !roles.includes(req.role)) {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }
  next();
};
