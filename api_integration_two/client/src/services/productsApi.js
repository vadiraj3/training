import apiClient from './apiClient';

export const getProducts = () => apiClient.get('/products');

export const getProductById = (id) => apiClient.get(`/products/${id}`);

export const createProduct = (payload) => apiClient.post('/products', payload);

export const updateProduct = (id, payload) =>
  apiClient.put(`/products/${id}`, payload);

export const deleteProduct = (id) => apiClient.delete(`/products/${id}`);
