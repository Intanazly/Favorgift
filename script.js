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

     updateCartCount();

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

window.onload = function(){

    updateCartCount();

    loadStock();

    if(document.getElementById("cart-items")){
        displayCart();
    }

}


function saveStock(){

    let stock = {

        // Wedding
        sabun: document.getElementById("sabun").value,
        madu: document.getElementById("madu").value,
        lilin: document.getElementById("lilin").value,
        tuala: document.getElementById("tuala").value,
        coklat: document.getElementById("coklat").value,
        setcawan: document.getElementById("setcawan").value,
        kipas: document.getElementById("kipas").value,
        sudu: document.getElementById("sudu").value,
        tisu: document.getElementById("tisu").value,
        sejadah: document.getElementById("sejadah").value,

        // Birthday
        gula: document.getElementById("gula").value,
        popcorn: document.getElementById("popcorn").value,
        biskut: document.getElementById("biskut").value,
        makaron: document.getElementById("makaron").value,
        kapas: document.getElementById("kapas").value,
        kek: document.getElementById("kek").value,
        minyak: document.getElementById("minyak").value,
        sanitizer: document.getElementById("sanitizer").value,
        bubble: document.getElementById("bubble").value,
        kuku: document.getElementById("kuku").value,

        // Corporate
        pen: document.getElementById("pen").value,
        cawan: document.getElementById("cawan").value,
        nota: document.getElementById("nota").value,
        termos: document.getElementById("termos").value,
        kalender: document.getElementById("kalender").value,
        fail: document.getElementById("fail").value,
        pensil: document.getElementById("pensil").value,
        pelekat: document.getElementById("pelekat").value,
        lanyard: document.getElementById("lanyard").value,
        bekal: document.getElementById("bekal").value

    };

    localStorage.setItem("stock", JSON.stringify(stock));

    alert("Stok berjaya disimpan!");
}

function loadStock(){

    let stock = JSON.parse(localStorage.getItem("stock"));

    if(!stock) return;

    // Wedding
    if(document.getElementById("stock-sabun"))
        document.getElementById("stock-sabun").innerText = "Stok: " + stock.sabun;

    if(document.getElementById("stock-madu"))
        document.getElementById("stock-madu").innerText = "Stok: " + stock.madu;

    if(document.getElementById("stock-lilin"))
        document.getElementById("stock-lilin").innerText = "Stok: " + stock.lilin;

    if(document.getElementById("stock-tuala"))
        document.getElementById("stock-tuala").innerText = "Stok: " + stock.tuala;

    if(document.getElementById("stock-coklat"))
        document.getElementById("stock-coklat").innerText = "Stok: " + stock.coklat;

    if(document.getElementById("stock-setcawan"))
        document.getElementById("stock-setcawan").innerText = "Stok: " + stock.setcawan;

    if(document.getElementById("stock-kipas"))
        document.getElementById("stock-kipas").innerText = "Stok: " + stock.kipas;

    if(document.getElementById("stock-sudu"))
        document.getElementById("stock-sudu").innerText = "Stok: " + stock.sudu;

    if(document.getElementById("stock-tisu"))
        document.getElementById("stock-tisu").innerText = "Stok: " + stock.tisu;

    if(document.getElementById("stock-sejadah"))
        document.getElementById("stock-sejadah").innerText = "Stok: " + stock.sejadah;




}
