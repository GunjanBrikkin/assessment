// Custom Middleware for Logging Requests
// Problem:
// The application is missing a logging mechanism that records every incoming request, including its method and URL.

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
// res.send('Hello, world!');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));


// Implement a custom middleware function that logs the HTTP method and URL of each incoming request.
// Add the middleware to the app so that every request is logged before reaching the route handlers.
require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("../middlewares/apilog");
const port = process.env.PORT;
const dbFunctionality = require("../database/connection/index");

dbFunctionality.connectionFun();


app.get('/', logger, async (req, res) => {
    try {

        return res.status(200).json({ message: "method and url is stored" })

    } catch (e) {
        console.log("e==>>", e);
        process.exit(1);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});