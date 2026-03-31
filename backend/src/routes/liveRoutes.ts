import { Router } from 'express';

import * as live from '../controllers/liveController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/sessions', requireAuth, live.listLiveSessions);
router.post('/sessions/:sessionId/register', requireAuth, live.registerLiveSession);
router.get('/sessions/:sessionId/rtc-token', requireAuth, live.getRtcToken);
router.post('/sessions/:sessionId/polls/vote', requireAuth, live.votePoll);

export default router;
