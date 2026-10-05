import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Shared RTK Query API instance.
 * Same backend as api_integration_two: http://localhost:3001/api
 *
 * Do NOT hardcode full URLs in pages.
 * Add resource endpoints via injectEndpoints in separate files.
 */
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api',
  }),
  tagTypes: ['Product', 'Todo', 'Project', 'Order', 'Ticket'],
  endpoints: () => ({}),
});
