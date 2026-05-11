import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions for level three endpoints
export const getProfileInsights = () => {
  return apiClient.get('/insights/profile');
};

export const getCampaignInsights = () => {
  return apiClient.get('/insights/campaigns');
};

export const getWarehouseInsights = () => {
  return apiClient.get('/insights/warehouse');
};

export const getKnowledgeInsights = () => {
  return apiClient.get('/insights/knowledge');
};

export const getRiskInsights = () => {
  return apiClient.get('/insights/risk');
};

export const getMessagePayload = () => {
  return apiClient.get('/payloads/message');
};

export const getCountPayload = () => {
  return apiClient.get('/payloads/count');
};

export const getFlagPayload = () => {
  return apiClient.get('/payloads/flag');
};

export const getEmptyPayload = () => {
  return apiClient.get('/payloads/empty');
};

export const getMatrixPayload = () => {
  return apiClient.get('/payloads/matrix');
};

export default apiClient;
