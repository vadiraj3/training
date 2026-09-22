import apiClient from './apiClient';

export const getTickets = () => apiClient.get('/tickets');

export const getTicketById = (id) => apiClient.get(`/tickets/${id}`);

export const createTicket = (payload) => apiClient.post('/tickets', payload);

export const updateTicket = (id, payload) =>
  apiClient.put(`/tickets/${id}`, payload);

export const deleteTicket = (id) => apiClient.delete(`/tickets/${id}`);
