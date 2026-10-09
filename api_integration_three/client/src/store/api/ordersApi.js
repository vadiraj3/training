/**
 * TODO: Implement Orders RTK Query endpoints.
 * Copy the pattern from OrdersApi.js
 *
 * Needed:
 * - getOrders / getOrderById / createOrder / updateOrder / deleteOrder
 * Required array field: items
 * Tag type: 'Order'
 *
 * import { baseApi } from './baseApi';
 * export const ordersApi = baseApi.injectEndpoints({ ... });
 */
import { baseApi } from "./baseApi";

export const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/orders",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Order", id })),
              { type: "Order", id: "LIST" },
            ]
          : [{ type: "Order", id: "LIST" }],
    }),

    getOrdersById: builder.query({
      query: (id) => `/orders/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Order", id }],
    }),

    createOrders: builder.mutation({
      query: (payload) => ({
        url: "/orders",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "Order", id: "LIST" }],
    }),

    updateOrders: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/orders/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Order", id },
        { type: "Order", id: "LIST" },
      ],
    }),

    deleteOrders: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Order", id },
        { type: "Order", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrdersByIdQuery,
  useCreateOrdersMutation,
  useUpdateOrdersMutation,
  useDeleteOrdersMutation,
} = ordersApi;
