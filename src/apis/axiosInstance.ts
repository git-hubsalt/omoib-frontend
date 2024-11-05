import axios, { InternalAxiosRequestConfig } from 'axios';
import useAuthStore from '../stores/authStore';

const publicAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URI,
  headers: { 'Content-Type': 'application/json' },
});

const privateAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URI,
  headers: { 'Content-Type': 'application/json' },
});

privateAxiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export {
  publicAxiosInstance,
  privateAxiosInstance,
};