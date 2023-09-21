
import ReactDOM from 'react-dom';
import { App } from './app';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyCjR_NaFYfkob_QunOE8GpdqrVVQmCukrc",
    authDomain: "netflix-joshua.firebaseapp.com",
    projectId: "netflix-joshua",
    storageBucket: "netflix-joshua.appspot.com",
    messagingSenderId: "670383983415",
    appId: "1:670383983415:web:de61076376a812ab72a8b2"
};
const firebase = window.firebase.initializeApp(config);
// import { seedDatabase } from './seed'
// seedDatabase(firebase)
ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);