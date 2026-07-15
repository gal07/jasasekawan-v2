import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCcQ1gQpCpEkzFphWBeNg-YZfMkQQhBeNg',
  authDomain: 'rev-streaming-8e34a.firebaseapp.com',
  projectId: 'rev-streaming-8e34a',
  storageBucket: 'rev-streaming-8e34a.firebasestorage.app',
  messagingSenderId: '1087007699760',
  appId: '1:1087007699760:web:63b263623391fd69e40ef5',
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
