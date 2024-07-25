export const Js = () => {
    document.querySelector("#maxPrice").addEventListener("input", e => {
        document.querySelector("#maxPriceOutput").textContent = e.target.value;
    });
    document.querySelector("#discount").addEventListener("change", e => {
        if (e.target.checked) {
            e.target.value = 1;
        } else {
            e.target.value = 0;
        };
    });
    document.querySelector("#newProducts").addEventListener("input", e => {
        if (e.target.checked) {
            e.target.value = 1;
        } else {
            e.target.value = 0;
        };
    });
    document.querySelector('#productSearchSubmit').addEventListener("click", e => {
        // provider.sdk.db.get()....
        const productName = document.querySelector("#productName").value;
        const productCatergory = document.querySelector("#productCategory").value;
        const priceRange = document.querySelector("#maxPrice").value;
        const discount = document.querySelector("#discount").value;
        const newProducts = document.querySelector("#newProducts").value;
        const deliveryOption = document.querySelector("#deliveryOption").value;
        console.log(`Request: ${productName},${productCatergory}, ${priceRange},${discount},${newProducts},${deliveryOption}`);
    });
};
