const http = require("node:http")
const fs = require("node:fs")

const server =  http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type" : "text/html" })
//method 1
    //const html = fs.readFileSync(__dirname+"/file.html", "utf-8")
    //res.end(html)
// method 2 (better)
    fs.createReadStream(__dirname+"/file.html", "utf-8").pipe(res)
})

server.listen(4000, () => {
    console.log("Server is running on port 4000")
})