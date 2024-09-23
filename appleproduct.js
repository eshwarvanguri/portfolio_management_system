// JavaScript functionality can be added here for dynamic behaviors, such as adding products to a cart or handling user interactions

document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Product added to cart!');
            // Add further functionality to handle the purchase
        });
    });
});
