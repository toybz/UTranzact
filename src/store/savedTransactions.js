import { createSlice } from "@reduxjs/toolkit";

const savedTransactions = createSlice({
  name: "savedTransactions",
  initialState: null,
  reducers: {
    setSavedTransactions: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSavedTransactions } = savedTransactions.actions;

export default savedTransactions.reducer;
