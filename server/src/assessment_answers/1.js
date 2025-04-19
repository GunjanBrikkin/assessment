// following is problem statement given in assessment 

// Async File Reading with Streams
// Problem:
// You need to read a large file asynchronously using streams, but the current code is inefficient and blocks the event loop.

// const fs = require('fs');
// const path = './largeFile.txt';

// const data = fs.readFileSync(path, 'utf-8'); // Issue: Blocking the event loop
// console.log(data);

// Modify the code to use streams to read the file asynchronously.
// Ensure that the reading process does not block the event loop.


//===============================================================================================================================
//===============================================================================================================================
// solution :

const fs = require("fs");

const path = "../largefile/largeFile.txt";

const data = fs.createReadStream(path, 'utf-8');

data.on('data', (chunks) => {
    console.log('Received chunk:', chunks.length, 'bytes');
});

data.on('end', () => {
    console.log("Finished reading the file.");
});