const images = [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=1000',
];

let currentImageIndex = 0;
const featuredImage = document.getElementById('featured-image');
const thumbnails = document.querySelectorAll('.thumbnails img');

function updateImage() {
    featuredImage.src = images[currentImageIndex];
    // Update thumbnails
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function setImage(index) {
    currentImageIndex = index;
    updateImage();
}

// Quantity controls
const quantityElement = document.getElementById('quantity');
let quantity = 1;

function updateQuantity() {
    quantityElement.textContent = quantity;
}

function incrementQuantity() {
    quantity++;
    updateQuantity();
}

function decrementQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantity();
    }
}

function addToCart() {
    alert(`Added ${quantity} item(s) to cart!`);
}

// Add keyboard navigation for gallery
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevImage();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    }
});