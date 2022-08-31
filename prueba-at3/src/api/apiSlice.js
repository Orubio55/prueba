import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://interview.staging.atresplayer.com",
  }),
  tagTypes: ["Sites"],
  endpoints: (builder) => ({
    getSites: builder.query({
      query: () => "/sites",
      providesTags: ["Sites"],
    }),
    getSite: builder.query({
      query: (id) => `/site/${id}`,
      providesTags: ["Sites"],
    }),
    postSite: builder.mutation({
      query: (body) => ({
        url: `/site`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Sites"],
    }),
    putSite: builder.mutation({
      query: (body) => ({
        url: `/site/${body.id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteSite: builder.mutation({
      query: (id) => ({
        url: `/site/${id}`,
        params: id,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetSitesQuery,
  useGetSiteQuery,
  usePostSiteMutation,
  usePutSiteMutation,
  useDeleteSiteMutation,
} = apiSlice;
