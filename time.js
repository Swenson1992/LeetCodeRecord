const startTime = process.hrtime.bigint()

setTimeout(() => {
    const endTime = process.hrtime.bigint();
    console.log(`Benchmark took ${endTime - startTime} nanoseconds`);
    // Benchmark took 1154389282 nanoseconds
}, 1000);

const readline = require('readline')
const fs = require('fs')
const stream = require('stream')

let outstream = new stream();

let instream = fs.createReadStream('./CHANGELOG.md');
const rl = readline.createInterface(instream, outstream)
rl.on('line', (line) => {
    console.log(line)
})

rl.on('close', () => {
    console.log(`readline close!`)
})


