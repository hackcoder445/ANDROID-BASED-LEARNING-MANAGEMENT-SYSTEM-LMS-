import { Request, Response } from 'express';

export const listChannels = (_req: Request, res: Response) => {
  res.json({
    channels: [
      { id: 'general-react-native', name: 'React Native Community', unread: 4 },
      { id: 'study-group-node', name: 'Node Study Group', unread: 1 },
    ],
  });
};

export const dmRequests = (_req: Request, res: Response) => {
  res.json({ requests: [{ id: 'r1', from: 'student-12', to: 'instructor-4', status: 'pending' }] });
};

export const escalateThread = (req: Request, res: Response) => {
  res.json({ escalated: true, threadId: req.params.threadId });
};
