import { Router } from 'express';

import * as cert from '../controllers/certificateController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/', requireAuth, cert.listCertificates);
router.get('/verify/:credentialId', cert.verifyCertificate);
router.get('/:id', requireAuth, cert.certificateDetail);
router.get('/:id/pdf', requireAuth, cert.exportCertificatePdf);

export default router;
