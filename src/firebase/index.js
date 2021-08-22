import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyApoR-eOXM8OXrQtMS-EHs0oLxyf7bcj_0",
  authDomain: "fintech-53fe8.firebaseapp.com",
  databaseURL: "https://fintech-53fe8-default-rtdb.firebaseio.com",
  projectId: "fintech-53fe8",
  storageBucket: "fintech-53fe8.appspot.com",
  messagingSenderId: "811300166187",
  appId: "1:811300166187:web:8fffe0644393f33b22286e",
  measurementId: "G-MV90ZLYEDY",
};

let app = firebase.initializeApp(firebaseConfig);
export const database = app.database();

export const DB_NODES = {
  RECENT_TRANSACTIONS: "recent-transactions",
};

export const DbFetch = (node, callback) => {
  let res = database.ref(node);
  return res.on("value", (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};

export const insertData = (node, data, callback) => {
  database.ref().child(node).push(data, callback);
};

/*


const overwrite = ()=>{
    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('users/' + userId).set({
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }
}


const fetch = ()=>{
    var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
    starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        updateStarCount(postElement, data);
    });
}

const fetchOnce = ()=>{
    const dbRef = firebase.database().ref();
    dbRef.child("users").child(userId).get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}


*/
