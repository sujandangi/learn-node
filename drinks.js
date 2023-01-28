//const EventEmitter = require("node:events")

class drinks {
    serveDrink(size) {
        if(size == "large"){
            console.log("Serving complementary drink!")
        }
    }
}

module.exports = drinks