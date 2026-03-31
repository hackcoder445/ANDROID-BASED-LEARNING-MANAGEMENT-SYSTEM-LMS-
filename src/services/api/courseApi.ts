import { api } from './client';

export const courseApi = {
  list: (params?: Record<string, string | number>) => api.get('/courses', { params }),
  detail: (courseId: string) => api.get(`/courses/${courseId}`),
  enroll: (courseId: string) => api.post(`/courses/${courseId}/enroll`),
  lessonSignedUrl: (courseId: string, lessonId: string) => api.get(`/courses/${courseId}/lessons/${lessonId}/signed-url`),
  wishlistToggle: (courseId: string) => api.post(`/courses/${courseId}/wishlist`),
};
