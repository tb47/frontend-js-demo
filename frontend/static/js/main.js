import { router } from "./router/router.js";
import { nav_footer_init } from "./nav_footer/nav_footer_init.js";
import "./firebase/firebase_init.js";

document.addEventListener("DOMContentLoaded", e => {
    // redirect the entry point of the page due to naming conventions and simplier routing 
    if (location.pathname.split("/")[1] === "") {
        location.href = "/home";
    };
    // set the active navigation link
    if (document.querySelector(`#${location.pathname.split("/")[1]}`)) {
        document.querySelector(`#${location.pathname.split("/")[1]}`).style.color = "#39e600";
    };

    nav_footer_init();

    router();
});

document.querySelector("#nAuth").addEventListener("click", async () => {
    import(/* webpackChunkName: "authModal" */ "./auth/authModal.js").then(m => {
        m.default();
    });
});
