document.addEventListener("DOMContentLoaded", function () {
    // Symulacja pobierania danych o produkcie
    setTimeout(() => {
        const product = {
            title: "Kosz wiklinowy",
            image: "https://via.placeholder.com/300",
            price: "99.99 PLN",
            description: "Ręcznie pleciony kosz wiklinowy, idealny na zakupy i dekorację."
        };

        document.getElementById("product-title").textContent = product.title;
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-image").alt = product.title;
        document.getElementById("product-price").textContent = `Cena: ${product.price}`;
        document.getElementById("product-description").textContent = product.description;
    }, 1000);
});
