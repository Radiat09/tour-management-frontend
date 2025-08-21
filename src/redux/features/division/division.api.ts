import { baseApi } from "@/redux/baseApi";

export const divisionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDivision: builder.mutation({
      query: (data) => ({
        url: "/division/create",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["DIVISION"],
    }),
    getDivisions: builder.query({
      query: () => ({
        url: "/division",
        method: "GET",
      }),
      providesTags: ["DIVISION"],
      transformResponse: (res) => res.data,
    }),
  }),
});

export const { useAddDivisionMutation, useGetDivisionsQuery } = divisionApi;
