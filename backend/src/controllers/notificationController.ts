import { Request, Response } from 'express';

export const listNotifications = (_req: Request, res: Response) => {
  res.json({
    data: [
      { id: 'n1', type: 'live_30m', title: 'Live class starts in 30 minutes', deepLink: 'hackcoder://live/l1/room' },
      { id: 'n2', type: 'streak_risk', title: 'Your streak is at risk today', deepLink: 'hackcoder://app' },
    ],
  });
};

export const markAllRead = (_req: Request, res: Response) => {
  res.json({ marked: true });
};
