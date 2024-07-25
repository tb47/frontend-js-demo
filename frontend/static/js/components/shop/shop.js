export const Html = /*html*/ `
    <div style="width: 100%; height: 100%; display: flex; flex-direction: row">
        <div style="width: 30%">
            <div style="height: 60%; padding: 1vh; display: flex; flex-direction: column; background-color: #343420; box-sizing: border-box; border: 1px solid black; border-radius: 4px"">
                <div style="display: flex; justify-content: space-between">
                    <label style="display: flex; align-items: center">Product name</label>
                    <input type="text" value="" id="productName" placeholder="Product name" style="width: 50%"></input>
                    <p id="productSearchSubmit" style="margin-left: 1%; padding: 3px; border: 1px solid black; border-radius: 5px; cursor: pointer"; onmouseover="this.style.backgroundColor='#40473D'; this.style.color='#30912D'; this.style.transition='1s'" onmouseout="this.style.backgroundColor=null; this.style.color='#4C6E40'; this.style.transition='0s'">search</p>
                </div>
                <div style="height: 40%; max-width: fit-content; display: flex; flex-direction: column; justify-content: space-evenly; margin-top: 3%; padding: 1% 1% 1% 1%; border: 1px solid black; border-radius: 5px">
                    <div>
                        <label>Product category</label>
                        <select id="productCategory">
                            <option>Shoes</option>
                            <option>Shirts</option>
                            <option>Pants</option>
                        </select>
                    </div>
                    <div style="display: flex">
                        <label>Price</label>
                        <input type="range" value="5" id="maxPrice" list="markers" min="1" max="100" step="1"></input>
                        <p> Up to: <output id="maxPriceOutput">5</output>€</p>
                    </div>
                    <div>
                        <label>Discount</label>
                        <input type="checkbox" value="0" id="discount"></input>
                    </div>
                    <div>
                        <label>New stuff</label>
                        <input type="checkbox" value="0" id="newProducts"></input>
                    </div>
                    <div>
                        <label>Delivery option</label>
                        <select id="deliveryOption">
                            <option value="all">Standard</option>
                            <option value="expressOnly">Express (+ x.xx€)</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="productsPremiumContent" style="padding: 1vh; height: 40%; background-color: #343420; box-sizing: border-box; border: 1px solid black; border-radius: 4px">
                premium / featured products
            </div>
        </div>
        <div id="products" style="padding: 1vh; width: 70%; background-color: #343420; border: 1px solid black; border-radius: 4px">
            product lister
        </div>
    </div>
`;
