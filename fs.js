const fs = require("node:fs/promises")

// fs.writeFile("./greet.txt", "Hello World!", (err) =>{
//     if(err) console.log(err)
//     else console.log("File written successfully.")
// })

console.log("first")

// fs.readFile("./greet.txt", "utf-8")
// .then(data => console.log(data))
// .catch(err => console.log(err))

async function readFile() {
    try{
        const data = await fs.readFile("greet.txt", "utf-8")
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
readFile()

console.log("second")