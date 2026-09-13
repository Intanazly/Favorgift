function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.name === name);

    if(existingItem){

        existingItem.quantity += 1;

    }else{

        cart.push({
            name:name,
            price:price,
            quantity:1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " berjaya ditambah ke troli!");
}
function displayCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cart-items");

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item,index) => {

    total += item.price * item.quantity;

    cartItems.innerHTML += `
       <div class="cart-item">

    <h3>${item.name}</h3>

    <p>RM${item.price.toFixed(2)}</p>

    <div class="qty-box">

        <button onclick="decreaseQty(${index})">-</button>

        <span>${item.quantity}</span>

        <button onclick="increaseQty(${index})">+</button>

    </div>

    <p>
        Subtotal:
        RM${(item.price * item.quantity).toFixed(2)}
    </p>

    <button onclick="removeItem(${index})">
        Buang
    </button>

</div>
    `;
});

    document.getElementById("total").innerHTML =
    "Total: RM" + total.toFixed(2);
}
function removeItem(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}
function increaseQty(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function decreaseQty(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = 0;

    cart.forEach(item => {

        totalItems += item.quantity || 1;

    });

    let countElement = document.getElementById("cart-count");

    if(countElement){
        countElement.innerText = totalItems;
    }
}
