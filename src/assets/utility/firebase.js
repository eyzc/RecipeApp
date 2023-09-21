
import {initializeApp} from "@react-native-firebase/app";
import auth from '@react-native-firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDDcrYfsSP4lrLMhnUwcOl8dQ4S2J-5IYE",
    authDomain: "recipeapp-4ded3.firebaseapp.com",
    databaseURL:'https://recipeapp-4ded3.firebaseio.com',
    projectId: "recipeapp-4ded3",
    storageBucket: "recipeapp-4ded3.appspot.com",
    messagingSenderId: "893989565000",
    appId: "1:893989565000:web:14b14b426d935d11ef9e7d",
    measurementId: "G-Q7PDJY39T9"
  };
  const app = initializeApp(firebaseConfig)

  export { auth }