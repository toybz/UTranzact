import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    displayName: null,
    email: null,
    isAnonymous: null,
    uid: null,
    refreshToken: null,
  },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer
export const { setUser } = user.actions;

export default user.reducer;
