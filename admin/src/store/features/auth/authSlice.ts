import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IAuth } from "@utils/types/auth";

const initialAuthState: IAuth = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setCredencial: (state: IAuth, action: PayloadAction<IAuth>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state: IAuth) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredencial, logOut } = authSlice.actions;

export default authSlice.reducer;
