import { Router } from 'express';

import * as quiz from '../controllers/quizController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/lesson/:lessonId', requireAuth, quiz.lessonQuiz);
router.post('/:quizId/submit', requireAuth, quiz.submitQuiz);
router.post('/judge0/run', requireAuth, quiz.runCode);

export default router;
