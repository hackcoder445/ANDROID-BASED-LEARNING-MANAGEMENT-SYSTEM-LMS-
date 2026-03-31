import { Request, Response } from 'express';

export const listLiveSessions = (_req: Request, res: Response) => {
  res.json({
    data: [
      { id: 'l1', title: 'System Design Office Hours', startsAt: '2026-03-31T18:00:00.000Z' },
      { id: 'l2', title: 'Frontend Interview Deep Dive', startsAt: '2026-04-01T14:00:00.000Z' },
    ],
  });
};

export const registerLiveSession = (req: Request, res: Response) => {
  res.json({ message: `Registered for live session ${req.params.sessionId}` });
};

export const getRtcToken = (req: Request, res: Response) => {
  res.json({ appId: 'agora-app-id', token: `rtc-token-${req.params.sessionId}`, expiresIn: 3600 });
};

export const votePoll = (req: Request, res: Response) => {
  res.json({ voted: true, optionId: req.body.optionId });
};
