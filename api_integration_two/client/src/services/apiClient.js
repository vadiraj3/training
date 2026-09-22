import axios from 'axios';

/**
 * Single place for base URL and shared Axios settings.
 * Do NOT hardcode full URLs in pages/components.
 */
export const API_BASE_URL = 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong while calling the API';
    return Promise.reject(new Error(message));
  }
);

export default apiClient;
