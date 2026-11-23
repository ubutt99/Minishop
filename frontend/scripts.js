
async function loadProducts() {

    const productContainer = document.getElementById("products");

    try {

        const response = await fetch("http://127.0.0.1:5001/products");

        const products = await response.json();

        productContainer.innerHTML = "";

        products.forEach(function(product) {

            const card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: ${product.price} PLN</p>
                <button>Add to Cart</button>
            `;

            productContainer.appendChild(card);

        });

    } catch (error) {

        productContainer.innerHTML = "Unable to load products";

        console.error("Error loading products:", error);

    }

}

loadProducts();
