document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    // Lista przykładowych produktów (możesz zamienić na dane z bazy)
    const products = {
        1: { name: "Kosz piknikowy", price: "120 zł", desc: "Stylowy kosz na piknik z wikliny.", img: "images/kosz1.jpg" },
        2: { name: "Kosz na zakupy", price: "80 zł", desc: "Solidny kosz wiklinowy na zakupy.", img: "images/kosz2.jpg" },
        3: { name: "Koszyk dekoracyjny", price: "60 zł", desc: "Elegancki koszyk do dekoracji wnętrz.", img: "images/kosz3.jpg" },
        // Możesz dodać więcej produktów tutaj
    };

    if (productId && products[productId]) {
        const product = products[productId];

        document.getElementById("product-title").textContent = product.name;
        document.getElementById("product-price").textContent = `Cena: ${product.price}`;
        document.getElementById("product-description").textContent = product.desc;
        document.getElementById("product-image").src = product.img;
    } else {
        document.querySelector(".product-details").innerHTML = "<h2>Produkt nie znaleziony</h2>";
    }
});
