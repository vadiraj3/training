// TODO: Implement tickets API helpers (GET, POST, PUT, DELETE)
// Follow the pattern in productsApi.js
// TODO: Implement orders API helpers (GET, POST, PUT, DELETE)
// Follow the pattern in productsApi.js
// TODO: Implement projects API helpers (GET, POST, PUT, DELETE)
// Follow the pattern in productsApi.js
import apiClient from "./apiClient";

// Example for learners: copy this pattern into the other *Api.js files.

export const getTickets = () => apiClient.get("/tickets");

export const getTicketsById = (id) => apiClient.get(`/tickets/${id}`);

export const createTickets = (payload) => apiClient.post("/tickets", payload);

export const updateTickets = (id, payload) =>
  apiClient.put(`/tickets/${id}`, payload);

export const deleteTickets = (id) => apiClient.delete(`/tickets/${id}`);
