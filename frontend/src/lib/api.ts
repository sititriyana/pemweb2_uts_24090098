import axios from 'axios';

const api = axios.create({
  // Tambahkan /api di akhir URL Railway Anda agar sinkron dengan backend
  baseURL: 'https://pemweb2uts24090098-production.up.railway.app/api'
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;