// Multiple Routes with Dynamic Parameters
// Problem:
// You need to create a basic routing system where each route can accept dynamic parameters, such as user IDs, in the URL.The following code has no dynamic route handling.

// const express = require('express');
// const app = express();

// app.get('/user', (req, res) => {
//     res.send('User data');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));


// Modify the code to create a dynamic route such as / user /: id, where id is a user’s unique identifier.
// The route should return a message with the user’s ID(e.g., “User data for ID: 123”).

const express = require('express');
const app = express();

app.get('/user:id', (req, res) => {
    const id = req.params.id;
    res.send(`User data for ID: ${id}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));