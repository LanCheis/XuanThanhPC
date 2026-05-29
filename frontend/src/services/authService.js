import axios from 'axios';

const API_URL = '/api/auth/';

// Create an axios instance
export const authApi = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor
authApi.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.access) {
      config.headers['Authorization'] = 'Bearer ' + user.access;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const register = async (userData) => {
  const response = await authApi.post('register/', userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await authApi.post('login/', credentials);
  if (response.data.access) {
    // Decode JWT payload to get username if backend doesn't send it
    // For simplicity, we just save the response which should contain tokens
    const userObj = {
      ...response.data,
      username: credentials.username // Saving username manually for display since DRF simplejwt only returns access/refresh by default
    };
    localStorage.setItem('user', JSON.stringify(userObj));
    return userObj;
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};
