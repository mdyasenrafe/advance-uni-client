import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {
  user: null | object;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUsers, logout } = authSlice.actions;

export default authSlice.reducer;
