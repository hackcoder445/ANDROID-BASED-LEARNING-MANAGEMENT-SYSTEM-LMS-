import { api } from '@/services/api/client';

export const aiApi = {
  askHackAi: (question: string, contextId: string) =>
    api.post('/ai/hackai/answer', { question, contextId }),
  transcript: (lessonId: string) => api.get(`/ai/transcripts/${lessonId}`),
  recommendations: () => api.get('/ai/recommendations'),
};
