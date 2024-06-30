import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "@store/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
