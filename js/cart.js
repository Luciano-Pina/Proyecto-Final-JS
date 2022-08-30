let contenedorCarrito = document.getElementById('contenedor-cart')
let totalCart = document.getElementById('total')
recuperarLS()

function recuperarLS(){
    let array = JSON.parse(localStorage.getItem('productInCart')) || []
    
    array.forEach(item => {
        viewCart(item)
        cartArray.push(item)
        totalCostCart()
    });
    
}

function viewCart(objeto) {
    let div = document.createElement('div')
    div.className = 'product-card'
    div.innerHTML =`
                        <div class="product-image">
                            <span class="discount-tag">10% off</span>
                            <img src="${objeto.img}" class="product-thumb" alt="cart-prod">
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">${objeto.name}</h2>
                            <p class="product-short-des">Built for speed and a fast swing</p>
                            <span class="price">£${objeto.price - (objeto.price * 0.1)}</span><span class="actual-price">£${objeto.price}</span>
                        </div>
                `
    contenedorCarrito.append(div)
}

function totalCostCart() {
    totalCart.innerText = cartArray.reduce((acc,el)=> acc + el.price,0)
    // let cartCost = localStorage.getItem("totalCostCart");    
    // if(cartCost != null){
    //     cartCost = parseInt(cartCost);
    //     localStorage.setItem("totalCostCart", cartCost + product.price)

    // }else {
    //     localStorage.setItem("totalCostCart", product.price);
    // }   

}

