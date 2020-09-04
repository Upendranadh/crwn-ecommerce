import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDWqDH64k03mDOEBEOoGrQp1F7A5MQR6U8",
  authDomain: "crwn-react-project2-db.firebaseapp.com",
  databaseURL: "https://crwn-react-project2-db.firebaseio.com",
  projectId: "crwn-react-project2-db",
  storageBucket: "crwn-react-project2-db.appspot.com",
  messagingSenderId: "1054562212303",
  appId: "1:1054562212303:web:6ef33ee7d27aa371e0daba",
  measurementId: "G-86FY738HRZ",
};

export const CreateUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additonalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
