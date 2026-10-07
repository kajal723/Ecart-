
let products = [];

storeData.categories.forEach(function(category) {

    category.subcategories.forEach(function(subcategory) {

        subcategory.products.forEach(function(product) {

            products.push(product);

        });

    });

});

console.log(products);




function searchProducts() {


    const minPrice =
        Number(document.getElementById("minPrice").value);

    const maxPrice =
        Number(document.getElementById("maxPrice").value);



    if (minPrice < 0 || maxPrice < 0) {

        alert("Price cannot be negative.");

        return;
    }


    if (minPrice > maxPrice) {

        alert("Minimum price cannot be greater than maximum price.");

        return;
    }



    const matchingProducts = products.filter(function(product) {

        return product.price >= minPrice &&
               product.price <= maxPrice;

    });


    const totalValue = matchingProducts.reduce(function(total, product) {

        return total + (product.price * product.stock);

    }, 0);


    document.getElementById("productCount").textContent =
        matchingProducts.length;



    document.getElementById("inventoryValue").textContent =
        "₹" + totalValue.toLocaleString("en-IN");



    const productList =
        document.getElementById("productList");

    productList.innerHTML = "";


    if (matchingProducts.length === 0) {

        productList.innerHTML = `
            <p class="message">
                No products found in this price range.
            </p>
        `;

        return;
    }


    matchingProducts.forEach(function(product) {

        const inventoryValue =
            product.price * product.stock;


        productList.innerHTML += `

            <div class="product-card">

                <h3>${product.name}</h3>

                <p>
                    Brand: ${product.brand}
                </p>

                <p class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <p class="stock">
                    Stock: ${product.stock}
                </p>

                <p class="value">
                    Inventory Value:
                    ₹${inventoryValue.toLocaleString("en-IN")}
                </p>

            </div>

        `;

    });

}