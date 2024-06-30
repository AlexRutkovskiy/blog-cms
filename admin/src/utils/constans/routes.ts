export const ROUTES = {
  INDEX: "/",
  AUTH: {
    INDEX: "/auth",
    SIGN_IN: "sign-in",
    SIGN_UP: "sign-up",
  },
  ADMIN: {
    INDEX: "/admin",
    DASHBOARD: "/",
  },
};

export const BACKEND_ROUTES = {
  AUTH: {
    SIGN_IN: "/auth/sign-in",
    SIGN_UP: "/auth/sign-up",
    LOGOUT: "/auth/logout",
    REFRESH_TOKEN: "/auth/refresh",
  },
};
