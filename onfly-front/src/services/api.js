import axios from 'axios';
import emitter from '@/eventBus';

const api = axios.create({
  baseURL: 'http://localhost:8000/api' // ajuste para sua API
});

api.interceptors.request.use(config => {
  emitter.emit('show-loading');
  return config;
}, error => {
  emitter.emit('hide-loading');
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
  emitter.emit('hide-loading');
  return response;
}, error => {
  emitter.emit('hide-loading');
  return Promise.reject(error);
});

api.interceptors.request.use(config => {
  const token = sessionStorage.getItem('auth');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, error => {
  return Promise.reject(error);
});

export default api;
