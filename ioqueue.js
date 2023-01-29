const fs = require("node:fs")

fs.readFile(__filename, () => console.log("Readfile1"))

setTimeout(() => {
    console.log("setTimeout1")
}, 0);

// Promise.resolve().then(() => console.log("Promise1"))
// process.nextTick(() => console.log("nextTick1"))

//learning the behaviour of event loop and
//the sequence of CB execution from various queues

//setTimeout and readFile (I/O) does not seem to follow a rule
//that is because of the implementation of timer
//if we run an empty loop, we will have to wait before we
//can enter the event loop. In that case readFile is executed 
//after setTimeout, always.

for(let i = 0; i < 200000000; i++) {}