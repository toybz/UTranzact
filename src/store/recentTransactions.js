import { createSlice } from "@reduxjs/toolkit";

export const recentTransactions = createSlice({
  name: "recentTransactions",
  initialState: null,
  reducers: {
    setRecentTransactions: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer
export const { setRecentTransactions } = recentTransactions.actions;

export default recentTransactions.reducer;
