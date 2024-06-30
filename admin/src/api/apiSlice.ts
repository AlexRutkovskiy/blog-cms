import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FetchArgs, BaseQueryApi } from "@reduxjs/toolkit/query/react";

import { BACKEND_ROUTES } from "@utils/constans/routes";
import { setCredencial, logOut } from "@store/features/auth/authSlice";
import type { AppRootState } from "@store/index";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL_BACKEND,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as AppRootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      BACKEND_ROUTES.AUTH.REFRESH_TOKEN,
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      const user = (api.getState() as AppRootState).auth.user;
      api.dispatch(
        setCredencial({ token: refreshResult.data as string, user })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
