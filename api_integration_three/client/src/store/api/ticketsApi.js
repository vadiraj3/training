/**
 * TODO: Implement Tickets RTK Query endpoints.
 * Copy the pattern from productsApi.js
 *
 * Needed:
 * - getTickets / getTicketById / createTicket / updateTicket / deleteTicket
 * Required array field: messages
 * Tag type: 'Ticket'
 *
 * import { baseApi } from './baseApi';
 * export const ticketsApi = baseApi.injectEndpoints({ ... });
 */
import { baseApi } from "./baseApi";

export const ticketsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTickets: builder.query({
      query: () => "/tickets",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "tickets", id })),
              { type: "tickets", id: "LIST" },
            ]
          : [{ type: "tickets", id: "LIST" }],
    }),

    getTicketsById: builder.query({
      query: (id) => `/tickets/${id}`,
      providesTags: (_result, _error, id) => [{ type: "tickets", id }],
    }),

    createTickets: builder.mutation({
      query: (payload) => ({
        url: "/tickets",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "tickets", id: "LIST" }],
    }),

    updateTickets: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/tickets/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "tickets", id },
        { type: "tickets", id: "LIST" },
      ],
    }),

    deleteTickets: builder.mutation({
      query: (id) => ({
        url: `/tickets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "tickets", id },
        { type: "tickets", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetTicketsQuery,
  useGetTicketsByIdQuery,
  useCreateTicketsMutation,
  useUpdateTicketsMutation,
  useDeleteTicketsMutation,
} = ticketsApi;
