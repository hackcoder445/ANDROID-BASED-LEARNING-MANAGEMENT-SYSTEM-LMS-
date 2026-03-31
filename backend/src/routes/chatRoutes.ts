import { Router } from 'express';

import * as chat from '../controllers/chatController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/channels', requireAuth, chat.listChannels);
router.get('/dm-requests', requireAuth, chat.dmRequests);
router.post('/threads/:threadId/escalate', requireAuth, chat.escalateThread);

export default router;
