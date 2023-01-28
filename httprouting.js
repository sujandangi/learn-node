const http = require("node:http")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, { "Content-Type" : "text/plain"})
        res.end("Home Page")
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type" : "text/plain"})
        res.end("About Page")
    } else if (req.url === "/api"){
        const obj = {
            one : "one",
            two : "two"
        }
        res.writeHead(200, { "Content-Type" : "application/json"})
        res.end(JSON.stringify(obj))
    } else {
        res.writeHead(404)
        res.end("page not found")
    }
})

server.listen(3000, () => {
    console.log("Serving on port 3000")
})