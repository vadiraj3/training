// TODO: Implement projects API helpers (GET, POST, PUT, DELETE)
// Follow the pattern in productsApi.js
import apiClient from "./apiClient";

// Example for learners: copy this pattern into the other *Api.js files.

export const getProjects = () => apiClient.get("/projects");

export const getProjectsById = (id) => apiClient.get(`/projects/${id}`);

export const createProjects = (payload) => apiClient.post("/projects", payload);

export const updateProjects = (id, payload) =>
  apiClient.put(`/projects/${id}`, payload);

export const deleteProjects = (id) => apiClient.delete(`/projects/${id}`);
