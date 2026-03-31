import { api } from '@/services/api/client';

export const paymentApi = {
  currentPlan: () => api.get('/billing/plan'),
  createPaymentIntent: (priceId: string) => api.post('/billing/payment-intent', { priceId }),
  payoutRequest: () => api.post('/billing/payout/request'),
};
