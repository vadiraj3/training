import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';

// Import endpoint slices so injectEndpoints runs and hooks exist.
import './api/productsApi';
// TODO: uncomment after you implement each slice
// import './api/todosApi';
// import './api/projectsApi';
// import './api/ordersApi';
// import './api/ticketsApi';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
