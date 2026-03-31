import { Router } from 'express';

import * as course from '../controllers/courseController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/', course.listCourses);
router.get('/:courseId', course.courseDetail);
router.post('/:courseId/enroll', requireAuth, course.enrollCourse);
router.get('/:courseId/lessons/:lessonId/signed-url', requireAuth, course.lessonSignedUrl);

export default router;
