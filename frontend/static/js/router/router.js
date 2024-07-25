// router (paths for html & js files)
// webpackChunkName is for code splitting reasons
const getHtml = async () => {
    let a;
    switch (location.pathname.split("/")[1]) {
        case "home":
            a = await import(/* webpackChunkName: "home" */`../components/home/home.js`);
            break;
        case "about":
            a = await import(/* webpackChunkName: "about" */`../components/about/about.js`);
            break;
        case "posts":
            a = await import(/* webpackChunkName: "posts" */`../components/posts/posts.js`);
            break;
        case "shop":
            a = await import(/* webpackChunkName: "shop" */`../components/shop/shop.js`);
            break;
        default:
            a = await import(/* webpackChunkName: "404" */`../components/404/404.js`);
            break;
    };
    return a.Html;
};

const getJs = async () => {
    let a;
    switch (location.pathname.split("/")[1]) {
        case "home":
            a = await import(/* webpackChunkName: "homeF" */`../components/home/homeF.js`);
            break;
        case "about":
            a = await import(/* webpackChunkName: "aboutF" */`../components/about/aboutF.js`);
            break;
        case "posts":
            a = await import(/* webpackChunkName: "postsF" */`../components/posts/postsF.js`);
            break;
        case "shop":
            a = await import(/* webpackChunkName: "shopF" */`../components/shop/shopF.js`);
            break;
        default:
            a = await import(/* webpackChunkName: "404F" */`../components/404/404F.js`);
            break;
    };
    return a.Js();
};

export const router = async () => {
    document.querySelector("#appMain").innerHTML = await getHtml();
    getJs();
};

export const navigateTo = url => {
    // set the color of the earlier navigation link back to inactive
    if (document.querySelector(`#${location.pathname.split("/")[1]}`)) {
        document.querySelector(`#${location.pathname.split("/")[1]}`).style.color = "#4C6E40";
    };
    // history.push the new link
    history.pushState(null, null, url);
    // call the router to get the html & js files
    router();
};
