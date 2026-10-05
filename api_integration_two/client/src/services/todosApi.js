// TODO: Implement todos API helpers (GET, POST, PUT, DELETE)
// Follow the pattern in productsApi.js
// Example: export const getTodos = () => apiClient.get('/todos');
import apiClient from "./apiClient";

export const getTodos = () => apiClient.get("/todos");

export const getTodosById = (id) => apiClient.get(`/todos/${id}`);

export const createTodos = (payload) => apiClient.post("/todos", payload);

export const updateTodos = (id, payload) =>
  apiClient.put(`/todos/${id}`, payload);

export const deleteTodos = (id) => apiClient.delete(`/todos/${id}`);
