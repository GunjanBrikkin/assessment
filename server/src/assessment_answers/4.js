// Environment Variables Management
// Problem:
// The application needs to manage configuration settings securely using environment variables, but it is currently hardcoded.

// const express = require('express');
// const app = express();

// const DB_HOST = 'localhost';
// const DB_PORT = 27017;

// app.get('/', (req, res) => {
// res.send(`Database is running on ${DB_HOST}:${DB_PORT}`);
// });

// app.listen(3000, () => console.log('Server running on port 3000'));


// Modify the code to use environment variables for managing the database connection string and port.
// Use the dotenv package to load variables from a .env file.

require("dotenv").config();

const express = require('express');
const app = express();

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send(`Database is running on ${DB_HOST}:${DB_PORT}`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));