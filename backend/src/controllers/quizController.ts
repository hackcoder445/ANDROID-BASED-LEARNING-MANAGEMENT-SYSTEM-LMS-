import { Request, Response } from 'express';

export const lessonQuiz = (req: Request, res: Response) => {
  res.json({
    lessonId: req.params.lessonId,
    questions: [
      { id: 'q1', type: 'multiple_choice', question: 'What secures video delivery?' },
      { id: 'q2', type: 'code_challenge', question: 'Implement debounce function.' },
    ],
  });
};

export const submitQuiz = (req: Request, res: Response) => {
  res.json({ quizId: req.params.quizId, score: 86, passed: true, submitted: req.body });
};

export const runCode = (req: Request, res: Response) => {
  res.json({ status: 'success', output: 'All tests passed', languageId: req.body.languageId });
};
