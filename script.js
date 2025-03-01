document.addEventListener("DOMContentLoaded", function () {
    const productSection = document.querySelector('.products');
    
    for (let i = 1; i <= 40; i++) {
        const productHTML = `
            <a href="produkt.html?id=${i}" style="text-decoration: none; color: inherit;">
                <div class="product">
                    <img src="images/kosz_placeholder.jpg" alt="Produkt ${i}">
                    <h2>Produkt ${i}</h2>
                    <p>Cena: --- zł</p>
                </div>
            </a>
        `;
        productSection.innerHTML += productHTML;
    }
});
