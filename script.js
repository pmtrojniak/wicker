document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || 1;

    document.getElementById("product-image").src = `images/kosz_placeholder.jpg`;
    document.getElementById("product-title").textContent = `Produkt ${productId}`;
    document.getElementById("product-description").textContent = `Opis produktu ${productId}...`;
});

