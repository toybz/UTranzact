import { database, DB_NODES } from "./index";

export const fetchSavedTransactions = (uid, callback) => {
  let ref = database.ref(DB_NODES.SAVED_TRANSACTIONS);
  ref
    .orderByChild("uid")
    .equalTo(uid)
    .on("value", (snapshot) => {
      const data = Object.values(snapshot?.val() || {});
      callback(data.reverse());
    });
};
