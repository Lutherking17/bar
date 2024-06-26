let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = cart.reduce((acc, item) => acc + item.price, 0);

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - S/ ${item.price}`;

        const button = document.createElement('button');
        button.textContent = 'Eliminar';
        button.onclick = () => removeFromCart(index);

        li.appendChild(button);
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = total;
}

document.getElementById('checkout-button').addEventListener('click', function() {
    document.getElementById('payment-methods').style.display = 'block';
});

// Initialize the cart on page load
updateCart();
