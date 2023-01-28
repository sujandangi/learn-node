const fs = require("node:fs")

fs.writeFileSync("file1.txt", "I am the data to be streamed")
fs.writeFileSync("file2.txt", "")

const readableStream = fs.createReadStream("file1.txt", {
    encoding: "utf-8",
    highWaterMark: 1
})

const writeableStream = fs.createWriteStream("file2.txt")

readableStream.on("data", (chunk) => {
    console.log(chunk)
    writeableStream.write(chunk)
})