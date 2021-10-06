import { database, DB_NODES } from "./index";

export const fetchRecentTransactions = (uid, callback) => {
  let ref = database.ref(DB_NODES.RECENT_TRANSACTIONS);
  ref
    .orderByChild("uid")
    .equalTo(uid)
    .on("value", (snapshot) => {
      const data = Object.values(snapshot?.val() || {});

      // Reversed the data so the last item added comes first
      callback(data.reverse());
    });
};
