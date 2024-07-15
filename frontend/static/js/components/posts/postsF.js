export const Js = () => {
    console.log("posts js function");
    // component-based parameter-handling seems like more reliable than lazy loading a generalized & "maybe" much bigger function for all components in router.js
    if (location.pathname.split("/").slice(2).length !== 0) {
        console.log(location.pathname.split("/").slice(2));

        // pseudo-request: provider.sdk.get(...).then(...)
        const fetched_data = location.pathname.split("/").slice(2);

        // after fetch
        document.querySelector('#posts_div_x').innerHTML = `post ${fetched_data}`;
    };
};
