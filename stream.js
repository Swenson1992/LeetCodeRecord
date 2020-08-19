const fs = require('fs');
const es = require('event-stream');
let totalLines = 0
let s = fs.createReadStream('./CHANGELOG.md')
    .pipe(es.split())
    .pipe(
        es.mapSync((line) => {
            totalLines++;

            console.log(`line: ${totalLines}, line: ${line}`)
        })
    )
    .on('error', (err) => {
        console.log(`Error while reading file. ${err}`)
    })
    .on('end', () => {
        console.log(`Read entire file.`)
        console.log(`Total: ${totalLines}`)
    })