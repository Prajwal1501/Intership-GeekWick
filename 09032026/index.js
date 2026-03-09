const express = require('express');
const app = express();

app.use(express.json());

//importing routes
const studentsRoutes = require('./studentsRoutes')


app.use('/api',studentsRoutes);

// Server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});



const express = require('express');

const app = express();

app.use(express.json());

//importing routes
const studentsRoutes = require('./routes/studentsRoutes');

app.use('/api',studentsRoutes);

app.listen(5000, () => {console.log('Server is running on port 5000'); });

const createStudent = (req, res) => {
    const student = req.body;
    // Here you would typically save the student to a database
    res.json({ message: 'Student created successfully', student });
}


module.exports = {
    getAllStudents,
    createStudent
}
const express = require('express');
const router = express.Router();

// Sample Routes of students

//controller init
const studentsController = require('../controllers/studentsController.js');

//to get all students
router.get('/students', studentsController.getAllStudents);
router.post('/students', studentsController.createStudent);

module.exports = router;


const getAllStudents = (req, res) => {
    res.json([
        { id:1, name: 'John Doe', age: 20, dob: '2003-01-15' , branch: 'Computer Science', college: 'ATME' },
        { id:2, name: 'Jane Smith', age: 22, dob: '2001-05-20', branch: 'Mathematics', college: 'ATME' },
        { id:3, name: 'Alice Johnson', age: 19, dob: '2004-11-10', branch: 'Physics', college: 'ATME' },
    ])
}