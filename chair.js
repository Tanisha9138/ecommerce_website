let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span'); 
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];

const conversionRate = 82; // 1 USD = 82 INR

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if (products.length > 0) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id; // Correctly assign the product ID
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">₹${(product.price * conversionRate).toFixed(2)}</div>
            <button class="addCart">Add To Cart</button>`;
            listProductHTML.appendChild(newProduct);
        });
    } else {
        console.error('No products found.');
    }
};

listProductHTML.addEventListener('click', (event) => {
    if (event.target.classList.contains('addCart')) {
        let id_product = event.target.closest('.item').dataset.id; // Get ID correctly
        addToCart(id_product);
    }
});

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((item) => item.product_id == product_id);

    if (positionThisProductInCart < 0) {
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        cart[positionThisProductInCart].quantity += 1;
    }

    addCartToHTML();
    addCartToMemory();
};

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;

    if (cart.length > 0) {
        cart.forEach(item => {
            totalQuantity += item.quantity; // Aggregate quantities for the total
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((product) => product.id == item.product_id);
            if (positionProduct >= 0) {
                let info = products[positionProduct];
                newItem.innerHTML = `
                <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">${info.name}</div>
                <div class="totalPrice">₹${(info.price * item.quantity * conversionRate).toFixed(2)}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>`;
                listCartHTML.appendChild(newItem);
            }
        });
    }

    // Update the cart icon count
    iconCartSpan.innerText = totalQuantity || 0; // Ensure it displays a number
};

listCartHTML.addEventListener('click', (event) => {
    if (event.target.classList.contains('minus') || event.target.classList.contains('plus')) {
        let product_id = event.target.closest('.item').dataset.id;
        let type = event.target.classList.contains('plus') ? 'plus' : 'minus';
        changeQuantityCart(product_id, type);
    }
});

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((item) => item.product_id == product_id);
    if (positionItemInCart >= 0) {
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity += 1;
                break;
            case 'minus':
                if (cart[positionItemInCart].quantity > 1) {
                    cart[positionItemInCart].quantity -= 1;
                } else {
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }

    addCartToHTML();
    addCartToMemory();
};

const initApp = () => {
    fetch('products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            products = data;
            addDataToHTML();
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
                addCartToHTML();
            }
        })
        .catch(error => console.error('Error fetching products:', error));
};

initApp();

