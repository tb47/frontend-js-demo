let l = 1;
const i = setInterval(() => {
    l++;
    document.querySelector("#nMid").style.background = `linear-gradient(to right, rgb(52, 52, 32), ${l}%, green)`;
    if (l === 100) {
        document.querySelector("#nUser").innerHTML = "Fetched username / none";
        clearInterval(i);
    };
}, 10);