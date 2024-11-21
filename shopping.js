const itemNameInput = document.getElementById("itemName");
const itemPriceInput = document.getElementById("itemPrice");
const itemQuantityInput = document.getElementById("itemQuantity");
const discountInput = document.getElementById("discount");
const cartItemsContainer = document.getElementById("cartItems");
const totalAmount = document.getElementById("totalAmount");

let cart = [];

function addItem() {
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value);
    const itemQuantity = parseInt(itemQuantityInput.value);

    if (itemName && itemPrice > 0 && itemQuantity > 0) {
        cart.push({ name: itemName, price: itemPrice, quantity: itemQuantity });
        itemNameInput.value = "";
        itemPriceInput.value = "";
        itemQuantityInput.value = "1";
        updateCart();
    }
}

function updateCart() {
    cartItemsContainer.innerHTML = "";

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";

        const itemText = document.createElement("span");
        itemText.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
        itemDiv.appendChild(itemText);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeItem(index);
        itemDiv.appendChild(removeButton);

        cartItemsContainer.appendChild(itemDiv);
    });

    calculateTotal();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function calculateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;
}

function applyDiscount() {
    const discount = parseFloat(discountInput.value);
    if (discount >= 0 && discount <= 100) {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discountedTotal = total * ((100 - discount) / 100);
        totalAmount.textContent = `$${discountedTotal.toFixed(2)}`;
    }
}
