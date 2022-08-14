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
    let price = parseInt (prompt("What will be the sale price?"))
    let units = prompt("How many have you got in stock?")
        racquets.push(new Racquet(id, name, price, units))

        console.table(racquets)
}

function generateProduct() {
    racquets.push( new Racquet(generateID(), "head speed pro".toUpperCase(), 200, 10))
    racquets.push( new Racquet(generateID(), "babolat pure aero".toUpperCase(), 210, 5))
    racquets.push( new Racquet(generateID(), "wilson pro staff rf97".toUpperCase(), 270, 7))
    racquets.push( new Racquet(generateID(), "yonex ezone 98".toUpperCase(), 200, 15))
}

// generateProduct() ------------> si invoco la funcion, refresco y me aparece error en la consola!

function navigateArray() {racquets.forEach(Element => console.log(Element))}

function filterProduct() {
    let search = prompt("Enter name of the product you are looking for")
    // debugger
    const result = racquets.filter (Racquet => Racquet.name.includes(search))
        console.table(result)
}

// ---------------------
// function findProduct() {
//     let find = prompt("Search for a product..")
//     const searchResult = racquets.find (Racquet => Racquet.name == find)
//         console.table(searchResult)
// }

generateProduct()
newRacquet()
navigateArray()
filterProduct()
