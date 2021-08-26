import { database, DB_NODES } from "../firebase";
import { useEffect, useState } from "react";
import useWallet from "./useWallet";

const nodeName = "recent-transactions";

export const useTransactions = () => {
  let [recentTransactions, setRecentTransactions] = useState([]);
  const { subtractFromWallet } = useWallet();
  useEffect(() => {
    fetchRecentTransactions();
  }, []);
  const fetchRecentTransactions = () => {
    let ref = database.ref(DB_NODES.RECENT_TRANSACTIONS);
    ref.limitToLast(5).on("value", (snapshot) => {
      const data = Object.values(snapshot?.val() || {});

      // Reversed the data so the last item added comes first
      setRecentTransactions(data.reverse());
    });
  };

  const newTransaction = async (transaction) => {
    const operation = await database.ref(nodeName).push();

    //todo: Decrease the wallet balance here
    return operation
      .set({
        ...transaction,
        id: operation.key,
      })
      .then(() => {
        return subtractFromWallet(
          transaction.debitWallet.id,
          transaction.amount
        );
      });
  };

  return {
    recentTransactions,
    newTransaction,
  };
};
