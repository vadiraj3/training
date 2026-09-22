import apiClient from './apiClient';

export const getTodos = () => apiClient.get('/todos');

export const getTodoById = (id) => apiClient.get(`/todos/${id}`);

export const createTodo = (payload) => apiClient.post('/todos', payload);

export const updateTodo = (id, payload) => apiClient.put(`/todos/${id}`, payload);

export const deleteTodo = (id) => apiClient.delete(`/todos/${id}`);
