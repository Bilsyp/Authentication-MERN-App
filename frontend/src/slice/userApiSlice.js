import { apiSlice } from "./apiSlice";

const User_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${User_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${User_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    update: builder.mutation({
      query: (data) => ({
        url: `${User_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${User_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useUpdateMutation,
  useRegisterMutation,
} = usersApiSlice;
