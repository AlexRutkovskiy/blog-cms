import { createSlice } from "@reduxjs/toolkit";
import type { IAuth } from "@utils/types/auth";

const initialAuthState: IAuth = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
});
