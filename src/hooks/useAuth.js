import { database } from "../firebase";

const nodeName = "users";
export default function useAuth() {
  //Todo: clean the code

  /*   const getCurrentUser = () => {
                               firebase.auth().onAuthStateChanged((user) => {
                                   if (user) {
                                       // User is signed in, see docs for a list of available properties
                                       // https://firebase.google.com/docs/reference/js/firebase.User
                                       var uid = user.uid;
                                       const displayName = user.displayName;
                                       const email = user.email;
                                       const photoURL = user.photoURL;
                                       const emailVerified = user.emailVerified;
    
                                       // The user's ID, unique to the Firebase project. Do NOT use
                                       // this value to authenticate with your backend server, if
                                       // you have one. Use User.getToken() instead.
                                       const uid = user.uid;
                                       // ...
                                   } else {
                                       // User is signed out
                                       // ...
                                   }
                               });
                           };
    
                           signOut = () => {
                               firebase
                                   .auth()
                                   .signOut()
                                   .then(() => {
                                       // Sign-out successful.
                                   })
                                   .catch((error) => {
                                       // An error happened.
                                   });
                           };
    
                           updateProfile();
                           {
                               user
                                   .updateProfile({
                                       displayName: "Jane Q. User",
                                       photoURL: "https://example.com/jane-q-user/profile.jpg",
                                   })
                                   .then(() => {
                                       // Update successful
                                       // ...
                                   })
                                   .catch((error) => {
                                       // An error occurred
                                       // ...
                                   });
                           }
                       */


  const createNewUser = (userDetails) => {
    //  { displayName, email, isAnonymous, uid }
    return database.ref(nodeName).push(userDetails);
  };

  const isUserExists = async (userId) => {
    let response = false;
    let ref = database.ref(nodeName);
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

  return {
    createNewUser,
    isUserExists,
  };
}
