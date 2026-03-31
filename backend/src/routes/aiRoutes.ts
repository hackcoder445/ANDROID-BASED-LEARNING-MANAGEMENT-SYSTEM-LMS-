import { Router } from 'express';

import * as ai from '../controllers/aiController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.post('/hackai/answer', requireAuth, ai.askHackAi);
router.get('/transcripts/:lessonId', requireAuth, ai.transcriptByLesson);
router.get('/recommendations', requireAuth, ai.recommendations);

export default router;
