// Handling Uncaught Errors and Graceful Shutdown
// Problem:
// The following code has no error handling for uncaught exceptions or unhandled promise rejections, which could cause the application to crash unexpectedly.

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
// throw new Error('Something went wrong');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));


// Modify the code to handle uncaught exceptions and unhandled promise rejections gracefully.
// Implement a graceful shutdown for the application when it encounters an uncaught exception.

const express = require("express");
const app = express();
const PORT = 3000;


app.get("/", (req, res, next) => {
    // Instead of crashing, pass error to error-handling middleware
    next(new Error("Something went wrong in route!"));
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

process.on("uncaughtException", (err) => {  //exceptions
    console.error("Uncaught Exception:", err);
    shutdown();
});

process.on("unhandledRejection", (reason, promises) => {
    console.error("Unhandled Rejection:", reason);
    shutdown();
});

const shutdown = () => {
    console.log("Shutting down gracefully...");
    server.close(() => {
        console.log("Server closed!");
        process.exit(1); // 1 means error + exit , 0 means no error + exit 
    });
}