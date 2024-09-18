const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Serve static files (for front-end HTML)
app.use(express.static('public'));

// Sample route for the homepage
app.get('/', (req, res) => {
    res.send('Grocery Order App Backend');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
