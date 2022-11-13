import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
        apiKey: "AIzaSyDtEWhFcmCYLh2AnwzX1yhXpd_531tIIWg",
        authDomain: "auth-69baa.firebaseapp.com",
        projectId: "auth-69baa",
        storageBucket: "auth-69baa.appspot.com",
        messagingSenderId: "937179483135",
        appId: "1:937179483135:web:1a3f145eb0ee562cdbf5ca",
        measurementId: "G-686DTGKCV3"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{firebase, auth, firestore}}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);
