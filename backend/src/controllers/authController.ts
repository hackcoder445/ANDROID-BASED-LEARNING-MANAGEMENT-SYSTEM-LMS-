import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { config } from '../config/env';

const signToken = (userId: string, role: string) =>
  jwt.sign({ sub: userId, role }, config.jwtSecret, { expiresIn: '15m' });

export const login = (req: Request, res: Response) => {
  const { email } = req.body;
  const role = 'student';
  res.json({
    user: { id: 'u1', name: 'Ada Obi', email, role },
    accessToken: signToken('u1', role),
    refreshToken: 'refresh-token-placeholder',
  });
};

export const register = (req: Request, res: Response) => {
  const { name, email, role = 'student' } = req.body;
  res.status(201).json({
    user: { id: 'u2', name, email, role },
    accessToken: signToken('u2', role),
    refreshToken: 'refresh-token-placeholder',
  });
};

export const magicLink = (req: Request, res: Response) => {
  res.json({ message: `Magic link sent to ${req.body.email}` });
};

export const refresh = (_req: Request, res: Response) => {
  res.json({ accessToken: signToken('u1', 'student') });
};

export const setupTotp = (_req: Request, res: Response) => {
  res.json({ qrCodeUrl: 'otpauth://totp/HackCoderAcademy?secret=ABC123' });
};

export const verifyTotp = (_req: Request, res: Response) => {
  res.json({ verified: true });
};
