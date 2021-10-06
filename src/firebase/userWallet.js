import { database, DB_NODES } from "./index";

export const fetchUserWallets = (uid, callback) => {
  let ref = database.ref(DB_NODES.WALLETS);
  ref
    .orderByChild("uid")
    .equalTo(uid)
    .on("value", (snapshot) => {
      const data = Object.values(snapshot?.val() || {});
      callback(data);
    });
};
