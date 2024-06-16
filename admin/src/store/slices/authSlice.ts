import { createSlice } from "@reduxjs/toolkit";
import { authState } from "@store/state/authState";

export const userSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {},
});
