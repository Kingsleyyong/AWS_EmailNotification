import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import EmailUsage from './emailUsage.js';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCsC3vVRsyS1QdLVC62u2yo8j37jgHmHlA",
  authDomain: "myemailproject-a357f.firebaseapp.com",
  projectId: "myemailproject-a357f",
});
const db = getFirestore();


let accNotification = async () => {
   let wholeDatas = [];
   const querySnapshot = await getDocs(collection(db, "emailSubscriptionList"));

   querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      wholeDatas.push({ID: doc.id, ...doc.data()})
   });
   let accountNotificationDocs = wholeDatas.filter(doc => doc.subcribeTopics.accountNotification === true);

   if (accountNotificationDocs.length !== 0) {
      accountNotificationDocs.forEach((doc) => {
         EmailUsage.accNotificationEmail(doc.email, doc.name)
      })
   } 
};

accNotification();