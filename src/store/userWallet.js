import { createSlice } from "@reduxjs/toolkit";

const userWallet = createSlice({
  name: "userWallet",
  initialState: [],
  reducers: {
    setUserWallet: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer
export const { setUserWallet } = userWallet.actions;

export default userWallet.reducer;
