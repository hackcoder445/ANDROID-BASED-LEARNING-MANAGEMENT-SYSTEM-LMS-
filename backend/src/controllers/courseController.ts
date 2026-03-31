import { Request, Response } from 'express';

const demoCourses = [
  { id: 'c1', title: 'React Native for Production Apps', difficulty: 'Intermediate', price: 49 },
  { id: 'c2', title: 'Modern Backend Engineering with Node.js', difficulty: 'Advanced', price: 79 },
];

export const listCourses = (_req: Request, res: Response) => {
  res.json({ data: demoCourses, page: 1, hasMore: false });
};

export const courseDetail = (req: Request, res: Response) => {
  const course = demoCourses.find((item) => item.id === req.params.courseId);
  if (!course) {
    res.status(404).json({ message: 'Course not found' });
    return;
  }
  res.json({
    ...course,
    syllabus: [
      { id: 's1', title: 'Foundations', lessons: 8 },
      { id: 's2', title: 'State & APIs', lessons: 12 },
    ],
  });
};

export const enrollCourse = (req: Request, res: Response) => {
  res.json({ message: `Enrolled in ${req.params.courseId}` });
};

export const lessonSignedUrl = (req: Request, res: Response) => {
  res.json({
    signedUrl: `https://cdn.hackcoderacademy.com/video/${req.params.lessonId}?sig=demo`,
    expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
  });
};
