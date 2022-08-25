const searchBar = document.querySelector("input");

// -------------------------------Pelotas------------------------------------------------------------//
class Ball {
    constructor(id, name, price, units){
        this.id = id;
        this.name = name;
        this.price = price;
        this.units = units;        
        this.inStock = true;
    }
    priceTax () {
        let priceTax = this.price * tax
        return "£" + priceTax.toFixed(2)        
    }
}

function newBall() {
    let id = generateID()
    let name = prompt("Name and model of balls?").toUpperCase()
    let price = parseInt(prompt("What will be the sale price?"))
    let units = prompt("How many have you got in stock?")
        balls.push(new Ball(id, name, price, units))
        console.table(balls)
}

function generateProductB() {
    balls.push (new Ball(generateID(), "Dunlop ATP".toUpperCase(), 6, 300))
    balls.push (new Ball(generateID(), "Dunlop ATP Championship".toUpperCase(), 4.5, 250))
    balls.push (new Ball(generateID(), "Dunlop Australian Open".toUpperCase(), 5, 150))
    balls.push (new Ball(generateID(), "Dunlop Fort All Court Tournament Select".toUpperCase(), 5.5, 270))
    balls.push (new Ball(generateID(), "Head Tour XT".toUpperCase(), 5.5, 320))
    balls.push (new Ball(generateID(), "Slazenger Wimbledon".toUpperCase(), 5.5, 350))
    balls.push (new Ball(generateID(), "Babolat Gold Academy Bucket".toUpperCase(), 95, 100))
    balls.push (new Ball(generateID(), "Head Coach Bucket".toUpperCase(), 80, 90))
}

function navigateArrayB() {balls.forEach(Element => console.log(Element))}

searchBar.addEventListener("keyup",(i)=>{
    const searchInput = i.target.value.toUpperCase();
    const ballResults = balls.filter (Ball => {
       return Ball.name.includes(searchInput)
  })
  console.log(ballResults)
})

 

// -------------------------------------------------------------------------------------------------//
// -----------------------------Cuerdas------------------------------------------------------------//
class String {
    constructor(id, name, price, units, type) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.units = units;
        this.type = type;
        this.inStock = true;
    }
        priceTax () {
            let priceTax = this.price * tax
            return "£" + priceTax.toFixed(2)        
        }
}

function newString() {
    let id = generateID()
    let name = prompt("Name and model of string?").toUpperCase()
    let price = parseInt(prompt("What will be the sale price?"))
    let units = prompt("How many have you got in stock?")
    let type = prompt("What type of string is it?")
        strings.push(new String(id, name, price, units, type))
        console.table(strings)
}

function generateProductS() {
    strings.push( new String(generateID(), "luxilon alu power soft 200m".toUpperCase(), 200, 10, "multifilament".toLowerCase()))
    strings.push( new String(generateID(), "Volkl V-Icon 12m".toUpperCase(), 45, 15, "natural gut".toLowerCase()))
    strings.push( new String(generateID(), "Head Primal Hybrid 200m".toUpperCase(), 160, 20, "hybrid".toLowerCase()))
    strings.push( new String(generateID(), "Luxilon Savage 200m".toUpperCase(), 100, 30, "multifilament".toLowerCase()))
    strings.push( new String(generateID(), "Luxilon Smart 200m".toUpperCase(), 200, 15, "multifilament".toLowerCase()))
    strings.push( new String(generateID(), "Luxilon 4G Soft 200m".toUpperCase(), 200, 20, "multifilament".toLowerCase()))
    strings.push( new String(generateID(), "Yonex PolyTour Strike 200m".toUpperCase(), 150, 25, "multifilament".toLowerCase()))
    strings.push( new String(generateID(), "Babolat RPM Rough 200m".toUpperCase(), 150, 35, "multifilament".toLowerCase()))
}

function navigateArrayS() {strings.forEach(Element => console.log(Element))}

searchBar.addEventListener("keyup",(i)=>{
    const searchInput = i.target.value.toUpperCase();
    const stringResults = strings.filter (String => {
       return String.name.includes(searchInput)
  })
  console.log(stringResults)
})



// ------------------------------------------------------------------------------------------------//
// ------------------------------Raquetas---------------------------------------------------------//
class Racquet {
    constructor(id, name, price, units) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.units = units;
        this.inStock = true;
    }
        priceTax () {
            let priceTax = this.price * tax
            return "£" + priceTax.toFixed(2)
        } 
}

const tax = 1.2
function generateID() { return parseInt(Math.random() * 10000)}

function dontSell() {
    if (this.units == 0){
       return  this.inStock = false;
    }   
}


// CUANDO HAY POCO STOCK DE UN PRODUCTO

// let lowStock = racquets.filter(Racquets => Racquets.units <= 2);
    // console.log("Low stock on this product!");
    // console.log(lowStock);


function newRacquet() {
    let id = generateID()
    let name = prompt("Name and model of racquet?").toUpperCase()
    let price = parseInt(prompt("What will be the sale price?"))
    let units = prompt("How many have you got in stock?")
        racquets.push(new Racquet(id, name, price, units))

        console.table(racquets)
}

function generateProductR() {
    racquets.push( new Racquet(generateID(), "head speed pro".toUpperCase(), 200, 100))
    racquets.push( new Racquet(generateID(), "babolat pure aero".toUpperCase(), 210, 50))
    racquets.push( new Racquet(generateID(), "wilson pro staff rf97".toUpperCase(), 270, 70))
    racquets.push( new Racquet(generateID(), "yonex ezone 98".toUpperCase(), 200, 45))
    racquets.push( new Racquet(generateID(), "volkl v8 pro".toUpperCase(), 150, 100))
    racquets.push( new Racquet(generateID(), "head extreme pro".toUpperCase(), 150, 75))
    racquets.push( new Racquet(generateID(), "head radical pro".toUpperCase(), 120, 100))
    racquets.push( new Racquet(generateID(), "babolat pure drive".toUpperCase(), 220, 50))    
    racquets.push( new Racquet(generateID(), "wilson blade pro".toUpperCase(), 220, 50)) 
}

function navigateArray() {racquets.forEach(Element => console.log(Element))}
// -----------------------------------------------------------------------------------------------------


// para cuando cree la pagina de resultado de busqueda
const searchBtn = document.querySelector("button");
  

searchBar.addEventListener("keyup",(i)=>{
    const searchInput = i.target.value.toUpperCase();
    const racquetResults = racquets.filter (Racquet => {
       return Racquet.name.includes(searchInput)
  })
  console.log(racquetResults)
})


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

generateProductR()
generateProductS()
generateProductB()

// ---------------------------------Evento ADD CART--------------------------------------------------//




// ALGO DE ESTE ARRAY CONCATENADO NO FUNCIONA BIEN PARA STRINGS Y BALLS---------------/
// ----------------------------------------------------------------------------------/ 
const allProducts = [...racquets, ...strings, ...balls]
// --------------------------------------------------------------------------------/




let carts = document.querySelectorAll(".card-btn");

for (let i=0; i < carts.length; i++ ) {
    carts[i].addEventListener("click", () => {
        cartNumbers(allProducts[i]);
        totalCostCart(allProducts[i]);
    })
}

function cartNumbers(allProduct) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)

    if(productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
    } else{
        localStorage.setItem("cartNumbers", 1);
    }

    setItems(allProduct);
}


function setItems(allProduct) {
    allProducts.units = 1

    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems)

    if(cartItems != null) {
        if(cartItems[allProduct] == undefined){
            cartItems ={
                ...cartItems,
                [allProduct.name]: allProduct
            }
        }
        cartItems[allProduct] + 1;
    } else {
        allProduct.units = 1;
        cartItems = {allProduct}      
    }
    

    localStorage.setItem("productInCart", JSON.stringify(allProduct))       
}

// ACA ARRIBA INTENTO DE QUE NO ME SOBRE-ESCRIBA EN LOCAL.STORAGE PERO NO LO LOGRO!--------------------------//


function totalCostCart(product) {
    let cartCost = localStorage.getItem("totalCostCart");
    


    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCostCart", cartCost + product.price)

    }else {
        localStorage.setItem("totalCostCart", product.price);
    }

    

}