import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCY3-O7N6_dPIfKKb1X36BajspSBNg8u_M',
  authDomain: 'devfind-8d2dd.firebaseapp.com',
  projectId: 'devfind-8d2dd',
  storageBucket: 'devfind-8d2dd.appspot.com',
  messagingSenderId: '18490307383',
  appId: '1:18490307383:web:72c71e7d11282bef3c20b2',
  measurementId: 'G-PJ5WTBPZRQ',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
