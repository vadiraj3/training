import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API functions for level three endpoints
export const getProfileInsights = () => {
  return apiClient.get("/records");
};
export const getTasksInsights = () => {
  return apiClient.get("/records/tasks");
};
export const getProductsInsights = () => {
  return apiClient.get("/records/products");
};
export const getFeedbackInsights = () => {
  return apiClient.get("/records/feedback");
};
export const geteventsInsights = () => {
  return apiClient.get("/records/events");
};
export const getordersInsights = () => {
  return apiClient.get("/records/orders");
};
export const getprojectsInsights = () => {
  return apiClient.get("/records/projects");
};
export const getjobapplicationsInsights = () => {
  return apiClient.get("/records/jobApplications");
};
export const getsupportticketsInsights = () => {
  return apiClient.get("/records/supportTickets");
};
export const getcourseenrollmentsInsights = () => {
  return apiClient.get("/records/courseEnrollments");
};

export default apiClient;
