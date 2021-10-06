import { useEffect, useState } from "react";
import { database, DB_NODES } from "../firebase";

export const useBank = () => {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    let ref = database.ref(DB_NODES.BANKS);
    ref.once("value", (snapshot) => {
      const data = Object.values(snapshot?.val() || {});
      setBanks(data);
    });
  }, []);

  return {
    banks,
  };
};
