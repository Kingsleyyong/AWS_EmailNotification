// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCsC3vVRsyS1QdLVC62u2yo8j37jgHmHlA",
  authDomain: "myemailproject-a357f.firebaseapp.com",
  projectId: "myemailproject-a357f",
});

const db = getFirestore();

const dataAddingFirestore = async (obj) => {
  try {
    const docRef = await addDoc(collection(db, "emailSubscriptionList"), obj);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default dataAddingFirestore;
