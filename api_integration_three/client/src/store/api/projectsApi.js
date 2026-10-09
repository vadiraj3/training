/**
 *
 * TODO: Implement Projects RTK Query endpoints.
 * Copy the pattern from productsApi.js
 *
 * Needed:
 * - getProjects / getProjectById / createProject / updateProject / deleteProject
 * Required array field: milestones
 * Tag type: 'Project'
 *
 * import { baseApi } from './baseApi';
 * export const projectsApi = baseApi.injectEndpoints({ ... });
 */
import { baseApi } from "./baseApi";
export const projectsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
      providesTags: [{ type: "Projects", id: "LIST" }],
    }),

    getProjectsById: builder.query({
      query: (id) => `/projects/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Projects", id }],
    }),

    createProjects: builder.mutation({
      query: (payload) => ({
        url: "/projects",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "Projects", id: "LIST" }],
    }),

    updateProjects: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/projects/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Projects", id },
        { type: "Projects", id: "LIST" },
      ],
    }),

    deleteProjects: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Projects", id },
        { type: "Projects", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectsByIdQuery,
  useCreateProjectsMutation,
  useUpdateProjectsMutation,
  useDeleteProjectsMutation,
} = projectsApi;
