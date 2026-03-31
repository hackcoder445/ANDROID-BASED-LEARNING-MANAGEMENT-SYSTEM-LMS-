import { Router } from 'express';

import * as auth from '../controllers/authController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.post('/login', auth.login);
router.post('/register', auth.register);
router.post('/magic-link', auth.magicLink);
router.post('/refresh', auth.refresh);
router.post('/2fa/setup', requireAuth, auth.setupTotp);
router.post('/2fa/verify', requireAuth, auth.verifyTotp);

export default router;
