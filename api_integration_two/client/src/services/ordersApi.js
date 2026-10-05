// TODO: Implement orders API helpers (GET, POST, PUT, DELETE)
// Follow the pattern in productsApi.js
// TODO: Implement projects API helpers (GET, POST, PUT, DELETE)
// Follow the pattern in productsApi.js
import apiClient from "./apiClient";

// Example for learners: copy this pattern into the other *Api.js files.

export const getOrders = () => apiClient.get("/orders");

export const getOrdersById = (id) => apiClient.get(`/orders/${id}`);

export const createOrders = (payload) => apiClient.post("/orders", payload);

export const updateOrders = (id, payload) =>
  apiClient.put(`/orders/${id}`, payload);

export const deleteOrders = (id) => apiClient.delete(`/orders/${id}`);
