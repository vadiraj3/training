import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions for all endpoints
export const getSimpleUsers = () => {
  return apiClient.get('/users/simple');
};

export const getBasicUsers = () => {
  return apiClient.get('/users/basic');
};

export const getMediumUsers = () => {
  return apiClient.get('/users/medium');
};

export const getHobbiesUsers = () => {
  return apiClient.get('/users/hobbies');
};

export const getSkillsUsers = () => {
  return apiClient.get('/users/skills');
};

export const getCompanyUsers = () => {
  return apiClient.get('/users/company');
};

export const getEducationUsers = () => {
  return apiClient.get('/users/education');
};

export const getFullUsers = () => {
  return apiClient.get('/users/full');
};

export const getAdvancedUsers = () => {
  return apiClient.get('/users/advanced');
};

export const getComplexUsers = () => {
  return apiClient.get('/users/complex');
};

export default apiClient;

