document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart() {
        const product = this.parentElement;
        const productName = product.querySelector('h2').textContent;
        const productPrice = parseFloat(product.querySelector('.price').textContent.replace('$', ''));
        const cartItem = { name: productName, price: productPrice };

        cart.push(cartItem);

        updateCartDisplay();
    }

    function updateCartDisplay() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const contactLink = document.querySelector('nav a[href="#contacts"]');

    contactLink.addEventListener('click', function (event) {
        event.preventDefault();

        const targetElement = document.getElementById('contacts');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const checkoutButton = document.getElementById('checkout-btn');

    checkoutButton.addEventListener('click', function () {
        // Redirect to the checkout page
        window.location.href = 'checkout.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const checkoutButton = document.getElementById('home-id');

    checkoutButton.addEventListener('click', function () {
        // Redirect to the checkout page
        window.location.href = 'home.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let selectedProducts = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.parentElement;
            const productName = product.dataset.name;
            const productPrice = parseFloat(product.dataset.price);

            selectedProducts.push({ name: productName, price: productPrice });

            // You can also update the UI to show that the product has been added to the cart
            // UpdateCartUI(productName);
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        let selectedProducts = [];
    
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                const product = this.parentElement;
                const productName = product.dataset.name;
                const productPrice = parseFloat(product.dataset.price);
    
                selectedProducts.push({ name: productName, price: productPrice });
    
                // You can also update the UI to show that the product has been added to the cart
                // UpdateCartUI(productName);
            });
        });
    
        // Function to update UI (optional)
        function UpdateCartUI(productName) {
            // Add code to visually indicate that the product has been added to the cart
        }
    
        // Pass selected products to checkout.html when navigating
        document.getElementById('checkout-btn').addEventListener('click', function () {
            localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
            window.location.href = 'checkout.html';
        });
    });
    
    // Function to update UI (optional)
    function UpdateCartUI(productName) {
        // Add code to visually indicate that the product has been added to the cart
    }
});

