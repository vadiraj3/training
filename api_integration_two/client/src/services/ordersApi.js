import apiClient from './apiClient';

export const getOrders = () => apiClient.get('/orders');

export const getOrderById = (id) => apiClient.get(`/orders/${id}`);

export const createOrder = (payload) => apiClient.post('/orders', payload);

export const updateOrder = (id, payload) =>
  apiClient.put(`/orders/${id}`, payload);

export const deleteOrder = (id) => apiClient.delete(`/orders/${id}`);
