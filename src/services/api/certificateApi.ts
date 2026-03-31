import { api } from '@/services/api/client';

export const certificateApi = {
  list: () => api.get('/certificates'),
  detail: (id: string) => api.get(`/certificates/${id}`),
  verify: (credentialId: string) => api.get(`/certificates/verify/${credentialId}`),
  exportPdf: (id: string) => api.get(`/certificates/${id}/pdf`),
};
