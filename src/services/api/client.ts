import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.hackcoderacademy.com/v1',
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  if (config.headers && typeof (config.headers as { set?: unknown }).set === 'function') {
    (config.headers as { set: (name: string, value: string) => void }).set('Content-Type', 'application/json');
  } else {
    config.headers = {
      ...(config.headers ?? {}),
      'Content-Type': 'application/json',
    } as typeof config.headers;
  }
  return config;
});
