var cart = [];

function getCart() {
    return cart;
}

function setCart(c) {
    cart = c;
    return cart;
}

function addToCart(item) {
    cart.push({
        [item]: Math.floor(Math.random() * 100)
    });
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
    if (cart.length > 0) {
        let cartItemList = [];

        for (let i = 0; i < cart.length; i++) {
            let item = Object.keys(cart[i]);
            let price = cart[i][item];
            cartItemList.push(`${item} at $${price}`);
        }
        if (cart.length === 1) {
            console.log(`In your cart, you have ${cartItemList}.`);
        } else if (cart.length === 2) {
            console.log(`In your cart, you have ${cartItemList.join(' and ')}.`);
        } else {
            console.log(`In your cart, you have ${cartItemList.slice(0, -1).join(', ')}, and ${cartItemList[cartItemList.length - 1]}.`);
        }

    } else {
        console.log('Your shopping cart is empty.');
    }
}

function total() {
    let sumTotal = 0
    for (let i = 0; i < cart.length; i++) {
        let item = Object.keys(cart[i]);
        let price = cart[i][item];
        sumTotal += parseInt(price);
    }
    return sumTotal;
}

function removeFromCart(item) {
    let itemPresent = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i, 1);
        }
    }
    if (itemPresent) {
        console.log(cart)
    } else {
        console.log('That item is not in your cart.')
    }
}

function placeOrder(cardNumber = 0) {
    if (cardNumber != 0) {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
        cart = [];
    } else {
        console.log("Sorry, we don't have a credit card on file for you.")
    }
}