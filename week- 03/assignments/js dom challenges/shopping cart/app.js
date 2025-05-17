/**
 * Write your challenge solution here
 */
let cartItems = document.getElementById('cart-items')
let totalPriceElement = document.querySelector('#cart-total>h3')
let totalPrice = 0.00;

function addToCart(name, price){
    let div = document.createElement('div')
    div.innerText = `${name} of $${price}`
    cartItems.appendChild(div)
    totalPrice += price;
    totalPriceElement.innerText = `Total: $${totalPrice}`
    if (totalPriceElement.firstChild = document.querySelector('.empty-cart')){
        delete cartItems.removeChild(document.querySelector('.empty-cart')) 
    }
}


                                                           