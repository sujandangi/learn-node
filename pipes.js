const fs = require("node:fs")
//using zlib for zipping
const zlib = require("node:zlib")

const readableStream = fs.createReadStream("file1.txt", {
    encoding: "utf-8"
})

const writeableStream = fs.createWriteStream("file3.txt")

readableStream.pipe(writeableStream)

//using zlib to create an inbuilt transform stream to be chained
const gzip = zlib.createGzip()

readableStream.pipe(gzip).pipe(fs.WriteStream("file1.txt.gz"))