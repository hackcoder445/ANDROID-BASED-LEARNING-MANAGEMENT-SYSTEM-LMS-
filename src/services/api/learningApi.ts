import { api } from './client';

export const chatApi = {
  channels: () => api.get('/chat/channels'),
  dmRequests: () => api.get('/chat/dm-requests'),
  escalateToInstructor: (threadId: string) => api.post(`/chat/threads/${threadId}/escalate`),
};

export const quizApi = {
  byLesson: (lessonId: string) => api.get(`/quizzes/lesson/${lessonId}`),
  submit: (quizId: string, payload: unknown) => api.post(`/quizzes/${quizId}/submit`, payload),
  runCode: (payload: { source: string; languageId: number }) => api.post('/judge0/run', payload),
};
