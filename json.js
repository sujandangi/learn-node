const http = require("node:http")

const server = http.createServer((req, res) => {
    console.log(req)
    const person = {
        "name" : "bruce",
        "title" : "wayne"
    }
    res.writeHead(200, { "Content-Type" : "json"})
    res.end(JSON.stringify(person))
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})