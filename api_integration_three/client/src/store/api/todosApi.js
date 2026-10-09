import { baseApi } from "./baseApi";

/**
 * EXAMPLE SLICE — Todoss (filled for learners to copy)
 *
 * Pattern to follow for todos / projects / orders / tickets:
 * 1. injectEndpoints on baseApi
 * 2. define query / mutation endpoints
 * 3. provideTags / invalidatesTags for cache refresh
 * 4. export the auto-generated hooks
 */
export const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      providesTags: [{ type: "Todos", id: "LIST" }],
    }),

    getTodosById: builder.query({
      query: (id) => `/todos/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Todos", id }],
    }),

    createTodos: builder.mutation({
      query: (payload) => ({
        url: "/todos",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),

    updateTodos: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/todos/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Todos", id },
        { type: "Todos", id: "LIST" },
      ],
    }),

    deleteTodos: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Todos", id },
        { type: "Todos", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodosByIdQuery,
  useCreateTodosMutation,
  useUpdateTodosMutation,
  useDeleteTodosMutation,
} = todosApi;
