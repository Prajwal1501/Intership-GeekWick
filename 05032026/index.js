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

// Education Route
app.get('/education', (req, res) => {
    res.send('B.E in Computer Science AIML Engineering');
});

// Skills Route
app.get('/skills', (req, res) => {
    res.send('Skills: JavaScript, Node.js, Python, API Development');
});

app.get('/Profile', (req, res) => {
    res.send(`
        <h1>My Portfolio</h1>

        <h2>About</h2>
        <p>Hi, I am Prajwal J. I am a Computer Science AIML student and currently doing internship at GeekWick.</p>

        <h2>Education</h2>
        <p>B.E in Computer Science AIML Engineering</p>

        <h2>Skills</h2>
        <p>JavaScript, Node.js, Python, API Development</p>
    `);
});



app.use(express.json());

// POST API to calculate age
app.post('/calculate-age', (req, res) => {

    const dob = req.body.dob;
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    res.json({
        Date_of_Birth: dob,
        Age: age
    });

});
// Server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
