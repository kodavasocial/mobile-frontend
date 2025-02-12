import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDWvVCI9UfOi1ahsiDK2Xw2AfzyU1doJWw",
  authDomain: "mrwedsmrs-98413.firebaseapp.com",
  projectId: "mrwedsmrs-98413",
  storageBucket: "mrwedsmrs-98413.firebasestorage.app",
  messagingSenderId: "783553259061",
  appId: "1:783553259061:android:6851d34a9a7aeb8407337c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
