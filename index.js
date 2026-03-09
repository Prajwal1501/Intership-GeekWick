const express = require('express');
const app = express();

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to my Portfolio');
});

// About Route
app.get('/about', (req, res) => {
    res.send('Hi, I am Prajwal J. I am a Computer Science AIML student and currently doing internship at GeekWick.');
});
// Server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});