import { api } from './client';

export const liveApi = {
  sessions: () => api.get('/live/sessions'),
  register: (sessionId: string) => api.post(`/live/sessions/${sessionId}/register`),
  rtcToken: (sessionId: string) => api.get(`/live/sessions/${sessionId}/rtc-token`),
  pollVote: (sessionId: string, optionId: string) => api.post(`/live/sessions/${sessionId}/polls/vote`, { optionId }),
};
