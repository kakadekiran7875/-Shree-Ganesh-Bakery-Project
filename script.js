// ================== CART FUNCTIONALITY ==================
const cart = [];
const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.parentElement.querySelector("h3").innerText;
        const productPrice = button.parentElement.querySelector("p").innerText;
        cart.push({ name: productName, price: productPrice });
        document.querySelector(".cart a").innerText = `Cart (${cart.length})`;
        alert(`${productName} added to cart!`);
    });
});

// ================== HERO SLIDER ==================
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slider .slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if(i === index) slide.classList.add("active");
    });
}

// Initial display
showSlide(currentSlide);

// Auto change slide every 3 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);

// ================== PRODUCT CARD SCROLL ANIMATION ==================
const cards = document.querySelectorAll('.product-card');

function checkCards() {
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if(rect.top < windowHeight - 100) {
            card.classList.add('visible');
        }
    });
}

// Run on scroll and on page load
window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);
