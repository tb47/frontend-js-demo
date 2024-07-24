import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebase_auth } from "../firebase/firebase_init";

const fix_ui_after_login_logout = (user) => {
    document.querySelector("#nAuth").style.color = "#4C6E40";
    document.querySelector("#loginDiv4Email").value = "";
    document.querySelector("#loginDiv4Password").value = "";
    document.querySelector("#modalAuth").style.display = "none";
    document.querySelector(`#${location.pathname.split("/")[1]}`).style.color = "#39e600";
    document.querySelector("#nUser").innerHTML = user; 
    document.querySelector("#nAuth").innerHTML = "Logout";
};

export default () => {
    document.querySelector(`#${location.pathname.split("/")[1]}`).style.color = "#4C6E40";
    document.querySelector("#nAuth").style.color = "#39e600";
    if (document.querySelector("#nAuth").innerHTML === "Login / Register") {
        if (!document.querySelector('#modalAuth')) {
            document.body.insertAdjacentHTML("beforeend",
                `<div id="modalAuth"
                 style="display: flex; align-items: center; justify-content: center; position: fixed; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.4)">
                        <div id="modalContent" 
                        style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 25%; height: 35%; background-color: rgba(0,0,0,0.4); padding: 1em; borders: 1px solid black; border-radius: 10px">
                            <div style="width: 100%; height: 10%; display: flex; justify-content: flex-end">
                                <div>
                                    <p id="modalClose" 
                                    style="color: white; padding: 0.2em 0.4em 0.2em 0.4em; border: 1px solid black; border-radius: 5px; cursor: pointer" onmouseover="this.style.backgroundColor='#30332D'; this.style.transition='0.65s'" onmouseout="this.style.backgroundColor=null; this.style.transition='0.65s'">X
                                    </p>
                                </div>
                            </div>
                        <div id="loginDiv3" style="width: 100%; height: 20%;display: flex; flex-direction: row; justify-content: space-evenly">
                            <div style="width: 50%; text-align: center">
                                <p id="loginDiv3LoginP" style="color: green; font-size: xx-large; text-decoration: underline; cursor: pointer">
                                    Login
                                </p>
                            </div>
                            <div style="width: 50%; text-align: center">
                                <p id="loginDiv3RegisterP" style="color: #822E0A; font-size: medium; cursor: pointer">
                                    Register
                                </p>
                                </div>
                            </div>
                            <div id="loginDiv4" style="height: 50%; display: flex; flex-direction: column; align-items: center;">
                                <label for="email" style="margin-top: 6%; padding-bottom: 3%; color: white; font-family: Papyrus; text-decoration: underline;">
                                    Email
                                </label>
                            <input id="loginDiv4Email" type="email" name="email"></input>
                                <label for="password" style="margin-top: 10%; padding-bottom: 3%; color: white; font-family: Papyrus; text-decoration: underline;">
                                    Password
                                </label>
                            <input id="loginDiv4Password" type="password" name="password"></input> 
                        </div>
                        <div id="loginDiv5" 
                        style="margin-bottom: 3%; color: white; cursor: pointer; border: 1px solid black; border-radius: 5px; padding: 0.5em 1em 0.5em 1em" onmouseover="this.style.backgroundColor='#30332D'; this.style.transition='0.65s'" onmouseout="this.style.backgroundColor=null; this.style.transition='0.65s'" data-active="0">
                            <h4 id="loginDiv5LoginRegister">
                                Login
                            </h4>
                        </div>
                    </div>
                </div>`
            );
            document.querySelector("#modalClose").addEventListener("click", () => {
                document.querySelector("#nAuth").style.color = "#4C6E40";
                document.querySelector("#modalAuth").style.display = "none";
                document.querySelector(`#${location.pathname.split("/")[1]}`).style.color = "#39e600";
            });
            const a = document.querySelector("#loginDiv5");
            const b = document.querySelector("#loginDiv3LoginP");
            const c = document.querySelector("#loginDiv3RegisterP");
            b.addEventListener("click", () => {
                if (a.dataset.active === "1") {
                    a.dataset.active = "0";
                    b.style.fontSize = "xx-large";
                    b.style.color = "green";
                    b.style.textDecoration = "underline";
                    b.style.transition = "0.3s";
                    c.style.fontSize = "medium";
                    c.style.color = "#822E0A";
                    c.style.textDecoration = "none";
                };
            });
            c.addEventListener("click", () => {
                if (a.dataset.active === "0") {
                    a.dataset.active = "1";
                    c.style.fontSize = "xx-large";
                    c.style.color = "green";
                    c.style.textDecoration = "underline";
                    c.style.transition = "0.3s";
                    b.style.fontSize = "medium";
                    b.style.color = "#822E0A";
                    b.style.textDecoration = "none";
                };
            });
            b.addEventListener("mouseover", () => {
                if (a.dataset.active === "1") {
                    b.style.fontSize = "large";
                    b.style.color = "#FFB400";
                    b.style.transition = "1s";
                };
            });
            b.addEventListener("mouseout", () => {
                if (a.dataset.active === "1") {
                    b.style.fontSize = "medium";
                    b.style.color = "#822E0A";
                    b.style.transition = "0s";
                };
            });
            c.addEventListener("mouseover", () => {
                if (a.dataset.active === "0") {
                    c.style.fontSize = "large";
                    c.style.color = "#FFB400";
                    c.style.transition = "1s";
                };
            });
            c.addEventListener("mouseout", () => {
                if (a.dataset.active === "0") {
                    c.style.fontSize = "medium";
                    c.style.color = "#822E0A";
                    c.style.transition = "0s";
                };
            });
            document.querySelector("#loginDiv5").addEventListener("click", () => {
                // provider.sdk.auth.login(), ...
                if (a.dataset.active === "0") {
                    signInWithEmailAndPassword(firebase_auth, document.querySelector("#loginDiv4Email").value, document.querySelector("#loginDiv4Password").value)
                        .then((userCredential) => {
                            // Signed in 
                            console.log(userCredential.user.email);
                            fix_ui_after_login_logout(userCredential.user.email)
                            // ...
                        })
                        .catch((error) => {
                            console.log(error)
                        });
                } else {
                    createUserWithEmailAndPassword(firebase_auth, document.querySelector("#loginDiv4Email").value, document.querySelector("#loginDiv4Password").value)
                        .then((userCredential) => {
                            // Signed up 
                            console.log(userCredential.user);
                            fix_ui_after_login_logout(userCredential.user.email)
                            // ...
                        })
                        .catch((error) => {
                            console.log(error)
                            // ..
                        });
                }
            });
        } else {
            document.querySelector("#modalAuth").style.display = "flex";
        };
    } else {
        // provider.sdk.auth.logout() ...
        firebase_auth.signOut();
        console.log("logout");
        document.querySelector("#nAuth").innerHTML = "Login / Register";
        document.querySelector("#nUser").innerHTML = "not logged in";
    };
};
