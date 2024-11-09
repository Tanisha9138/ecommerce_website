'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

let cartItems = [];
let wishlistItems = [];

// Sample product data for images (You can replace these with actual product data)
const productsData = {
  "Casual Men's Brown shoes": {
    image: 'images/shoe-2.jpg',
    price: 'Rs.699.00'
  },
  "Pocket Watch Leather Pouch": {
    image: 'images/watch-3.jpg',
    price: 'Rs.150.00'
  },
  "Smart Watch Vital Plus": {
    image: 'images/watch-1.jpg',
    price: 'Rs.100.00'
  },
  "Womens Party Wear Shoes": {
    image: 'images/party-wear-1.jpg',
    price: 'Rs.625.00'
  },
  "Mens Winter Leathers Jackets": {
    image: 'images/jacket-2.jpg',
    price: 'Rs.432.00'
  },
  "Mens Winter Leathers Jackets2": {
    image: 'images/jacket-4.jpg',
    price: 'Rs.548.00'
  },
  "Pure Garment Dyed Cotton Shirt": {
    image: 'images/shirt-2.jpg',
    price: 'Rs.545.00'
  },
  "MEN Yarn Fleece Full-Zip Jacket": {
    image: 'images/jacket-6.jpg',
    price: 'Rs.658.00'
  },
  "Black Floral Wrap Midi Skirt": {
    image: 'images/clothes-4.jpg',
    price: 'Rs.625.00'
  },
  "Trekking & Running Shoes - black": {
    image: 'images/sports-4.jpg',
    price: 'Rs.758.00'
  },
  "Men's Leather Formal Wear shoes": {
    image: 'images/shoe-1_1.jpg',
    price: 'Rs.350.00'
  },
  "Better Basics French Terry Sweatshorts": {
    image: 'images/shorts-2.jpg',
    price: 'Rs.578.00'
  }
};

// Function to update counts
function updateCounts() {
  document.getElementById('cart-count').textContent = cartItems.length;
  document.getElementById('wishlist-count').textContent = wishlistItems.length;
}

// Function to add item to cart
function addToCart(productName) {
  if (confirm(`Are you sure you want to add ${productName} to your cart?`)) {
    cartItems.push(productName);
    updateCounts();
    alert(`${productName} added to cart!`);

    // Ask if the user wants to place the order
    const orderConfirmation = confirm("Do you want to place the order now?");
    if (orderConfirmation) {
      placeOrder();
    } else {
      alert("You can continue shopping or review your cart later.");
    }
  }
}

// Function to place the order
function placeOrder() {
  // Placeholder for actual order placement logic, such as API calls or showing a summary page
  alert("Your order has been placed successfully!");

  // Clear the cart
  cartItems = [];
  updateCounts();
}

// Function to add item to wishlist
function addToWishlist(productName) {
  if (confirm(`Are you sure you want to add ${productName} to your wishlist?`)) {
    wishlistItems.push(productName);
    updateCounts();
    alert(`${productName} added to wishlist!`);
  }
}

// Function to open cart and show items
function openCart() {
  const cartDisplay = document.getElementById('cart-display');
  const cartItemsContainer = document.getElementById('cart-items');
  
  cartItemsContainer.innerHTML = ''; // Clear previous items

  if (cartItems.length === 0) {
    cartItemsContainer.textContent = 'Your cart is empty.';
  } else {
    cartItems.forEach(item => {
      const itemData = productsData[item];
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item'); // Add a class for styling

      // Create item content
      itemElement.innerHTML = `
        <img src="${itemData.image}" alt="${item}" width="50" />
        <div class="cart-item-details">
          <h4>${item}</h4>
          <p>Price: ${itemData.price}</p>
        </div>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
  }

  cartDisplay.style.display = 'block'; // Show cart display
}

// Event listeners for add-to-cart and add-to-wishlist buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.getAttribute('data-product-name');
    addToCart(productName);
  });
});

document.querySelectorAll('.add-to-wishlist').forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.getAttribute('data-product-name');
    addToWishlist(productName);
  });
});

// Event listener for cart button
document.getElementById('cart-button').addEventListener('click', openCart);

// Event listener for close cart button
document.getElementById('close-cart').addEventListener('click', function() {
  document.getElementById('cart-display').style.display = 'none';
});




<div class="header-user-actions">

<button class="action-btn">
  <ion-icon name="person-outline"></ion-icon>
</button>

<button class="action-btn" id="wishlist-button">
  <ion-icon name="heart-outline"></ion-icon>
  <span class="count" id="wishlist-count">0</span>
</button>

<button class="action-btn" id="cart-button">
  <ion-icon name="bag-handle-outline"></ion-icon>
  <span class="count" id="cart-count">0</span>
</button>

<div id="cart-display" class="cart-display" style="display: none;">
  <h2>Your Cart</h2>
  <div id="cart-items"></div>
  <button id="close-cart">Close</button>
</div> 