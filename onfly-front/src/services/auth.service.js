
import api from './api';

const AuthService = {
  register(name, email, password, access) {
    return api.post('/auth/register', { name, email, password, access });
  },

  login(email, password) {
    return api.post('/auth/login', { email, password });
  },

  logout() {
    return api.post('/auth/logout');
  },

  getUserProfile() {
    return api.get('/auth/me');
  },

  checkToken(name, email, password, access, token) {
    return api.post('/auth/check', { name, email, password, access, token });
  }
};

export default AuthService;
