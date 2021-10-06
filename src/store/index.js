import { configureStore } from "@reduxjs/toolkit";

import transactionDetails from "./modals/transactionDetails";
import fundCard from "./fundCard";
import user from "./user";
import recentTransactions from "./recentTransactions";
import userWallet from "./userWallet";
import savedTransactions from "./savedTransactions";

export default configureStore({
  reducer: {
    transactionDetails,
    fundCard,
    user,
    recentTransactions,
    userWallet,
    savedTransactions,
  },
});
