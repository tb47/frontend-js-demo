import { navigateTo } from "../router/router";

export const nav_footer_init = () => {
    const l = document.querySelectorAll(".nLink");
    for (let i = 0; i < l.length; i++) {
        l[i].addEventListener("click", e => {
            e.target.style.color = "#39e600";
            navigateTo(e.target.dataset.href);
        });
        l[i].addEventListener("mouseover", e => {
            if (location.pathname.split("/")[1] !== e.target.id) {
                e.target.style.color = "#30912D";
                e.target.style.transition = "0.65s";
            };
        });
        l[i].addEventListener("mouseout", e => {
            if (location.pathname.split("/")[1] !== e.target.id) {
                e.target.style.color = "#4C6E40";
                e.target.style.transition = "0.65s";
            };
        });
    };
    document.querySelector("#nAuth").addEventListener("mouseover", e => {
        if (!document.querySelector("#modalAuth") || document.querySelector("#modalAuth").style.display === "none") {
            e.target.style.color = "#30912D";
            e.target.style.transition = "0.65s";
        };
    });
    document.querySelector("#nAuth").addEventListener("mouseout", e => {
        if (!document.querySelector("#modalAuth") || document.querySelector("#modalAuth").style.display === "none") {
            e.target.style.color = "#4C6E40";
            e.target.style.transition = "0.65s";
        };
    });
};