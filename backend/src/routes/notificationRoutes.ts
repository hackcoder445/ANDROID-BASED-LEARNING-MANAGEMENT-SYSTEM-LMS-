import { Router } from 'express';

import * as notification from '../controllers/notificationController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/', requireAuth, notification.listNotifications);
router.post('/mark-all-read', requireAuth, notification.markAllRead);

export default router;
