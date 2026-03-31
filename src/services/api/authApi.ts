import { api } from './client';

export const authApi = {
  login: (payload: { email: string; password: string }) => api.post('/auth/login', payload),
  register: (payload: { name: string; email: string; password: string }) => api.post('/auth/register', payload),
  magicLink: (email: string) => api.post('/auth/magic-link', { email }),
  refresh: (refreshToken: string) => api.post('/auth/refresh', { refreshToken }),
  setupTotp: () => api.post('/auth/2fa/setup'),
  verifyTotp: (code: string) => api.post('/auth/2fa/verify', { code }),
};
