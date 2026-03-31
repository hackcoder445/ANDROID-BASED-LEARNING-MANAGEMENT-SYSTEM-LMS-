import { Request, Response } from 'express';

export const askHackAi = (req: Request, res: Response) => {
  const { question, contextId } = req.body;
  res.json({
    answer: `HackAI answer for context ${contextId}: ${question}`,
    confidence: 0.82,
    escalatable: true,
  });
};

export const transcriptByLesson = (req: Request, res: Response) => {
  res.json({
    lessonId: req.params.lessonId,
    lines: [
      { t: 5, text: 'Welcome to this lesson.' },
      { t: 19, text: 'We are covering signed URLs and access control.' },
    ],
  });
};

export const recommendations = (_req: Request, res: Response) => {
  res.json({ data: ['c1', 'c3', 'c2'] });
};
