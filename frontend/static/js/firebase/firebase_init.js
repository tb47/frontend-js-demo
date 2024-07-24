import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
    // your project config
};

export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth();

// ----------------------- developement / production ----------------------------
if (location.hostname === "localhost") {
    connectAuthEmulator(firebase_auth, 'http://127.0.0.1:9099');
    /*
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
    connectFunctionsEmulator(functions, "127.0.0.1", 5001);
    connectStorageEmulator(storage, "127.0.0.1", 9199);
    */
};
// ------------------------------------------------------------------------------

let l = 1;
const i = setInterval(() => {
    l++;
    document.querySelector("#nMid").style.background = `linear-gradient(to right, rgb(52, 52, 32), ${l}%, green)`;
    if (l === 100) {
        clearInterval(i);
    };
}, 10);

onAuthStateChanged(firebase_auth, user => {
    if (user) {
        // user is signed in
        document.querySelector("#nUser").innerHTML = user.email;
        document.querySelector("#nAuth").innerHTML = "Logout";

    } else {
        // User is signed out
        document.querySelector("#nUser").innerHTML = "not logged in";
    };
});