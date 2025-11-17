import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  timeout: 5000, // 5초 타임아웃
  headers: {
    'Content-Type': 'application/json',
  }
});

export default apiClient;
