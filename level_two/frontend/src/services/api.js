import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions for level two endpoints
export const getOrgUsers = () => {
  return apiClient.get('/users/org');
};

export const getProjectsUsers = () => {
  return apiClient.get('/users/projects');
};

export const getContactsUsers = () => {
  return apiClient.get('/users/contacts');
};

export const getScheduleUsers = () => {
  return apiClient.get('/users/schedule');
};

export const getAssetsUsers = () => {
  return apiClient.get('/users/assets');
};

export const getReviewsUsers = () => {
  return apiClient.get('/users/reviews');
};

export const getClientsUsers = () => {
  return apiClient.get('/users/clients');
};

export const getFinanceUsers = () => {
  return apiClient.get('/users/finance');
};

export const getOperationsUsers = () => {
  return apiClient.get('/users/operations');
};

export const getStrategyUsers = () => {
  return apiClient.get('/users/strategy');
};

export default apiClient;

