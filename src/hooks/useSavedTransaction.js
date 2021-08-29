import { useEffect, useState } from "react";
import { database, DB_NODES } from "../firebase";

export default function useSavedTransaction() {
  const [savedTransactions, setSavedTransactions] = useState([]);
  useEffect(() => {
    const fetchSavedTransactions = () => {
      let ref = database.ref(DB_NODES.SAVED_TRANSACTIONS);
      ref.limitToLast(2).on("value", (snapshot) => {
        const data = Object.values(snapshot?.val() || {});

        // Reversed the data so the last item added comes first
        setSavedTransactions(data.reverse());
      });
    };
    fetchSavedTransactions();
  }, []);

  return {
    savedTransactions,
  };
}
