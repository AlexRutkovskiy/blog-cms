import { apiSlice } from "@api/apiSlice";
import { BACKEND_ROUTES } from "@utils/constans/routes";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: BACKEND_ROUTES.AUTH.SIGN_IN,
        method: "POST",
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: (registerData) => ({
        url: BACKEND_ROUTES.AUTH.SIGN_UP,
        method: "POST",
        body: { ...registerData },
      }),
    }),
    logout: builder.query({
      query: () => ({
        url: BACKEND_ROUTES.AUTH.LOGOUT,
        method: "GET",
      }),
    }),
  }),
});
