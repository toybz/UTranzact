import { auth, database, DB_NODES } from "../firebase";
import { useSelector } from "react-redux";

export default function useAuth() {
  const userDetails = useSelector((store) => store.user);

  const createNewUser = (userDetails) => {
    //  { displayName, email, isAnonymous, uid }
    return database.ref(DB_NODES.USERS).push(userDetails);
  };
  const isUserExists = async (userId) => {
    let response = false;
    let ref = database.ref(DB_NODES.USERS);
    await ref
      .orderByChild("uid")
      .equalTo(userId)
      .once("value", (snapshot) => {
        const data = Object.values(snapshot?.val() || {});
        // console.log("callback data", data);
        response = data.length > 0;
      });
    return response;
  };

  const signOut = () => {
    return auth.signOut();
  };

  return {
    signOut,
    createNewUser,
    isUserExists,
    userDetails,
  };
}
