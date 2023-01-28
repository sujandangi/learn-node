const PizzaShop = require("./pizzashop")
const Drinks = require("./drinks")

const pizzaShop = new PizzaShop
const drinks = new Drinks

pizzaShop.on("order", (size, topping) => {
    console.log("order received!")
    console.log(`serving ${size} pizza with ${topping}`)
    drinks.serveDrink(size)
})

pizzaShop.order("small", "mushroom")
pizzaShop.showOrderNumber()


// const EventEmitter = require("node:events")

// const emitter = new EventEmitter
// //console.log(EventEmitter)
// // console.log(emitter)
// emitter.on("pizza", (size, qty) => {
//     console.log(`${qty} ${size} pizza ordered`)
//     if(size == "large"){
//         console.log("you seem very hungry")
//     }
// })

// emitter.emit("pizza", "larg", "one")