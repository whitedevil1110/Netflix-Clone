import firebase from 'firebase' ;

const firebaseConfig = {
    apiKey: "AIzaSyA17ToHeYqNEwsOC8tAsGfs8UOjtbL3M1g",
    authDomain: "netflix-clone-41265.firebaseapp.com",
    projectId: "netflix-clone-41265",
    storageBucket: "netflix-clone-41265.appspot.com",
    messagingSenderId: "237221600285",
    appId: "1:237221600285:web:01d948a5a5ff65b165faf4"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();

export { auth};
export default db ;