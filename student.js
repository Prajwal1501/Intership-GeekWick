const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Sample Student Data
let students = [
  { id: 1, name: "Prajwal", dob: "2003-05-10", college: "ATME College", course: "AIML" },
  { id: 2, name: "Rahul", dob: "2002-08-15", college: "MIT Mysore", course: "CSE" },
  { id: 3, name: "Anjali", dob: "2003-02-20", college: "ATME College", course: "ISE" }
];


// 1️⃣ GET All Students
app.get('/students/id/1', (req, res) => {
    res.json(students);
});


// 2️⃣ GET Student By ID
app.get('/api', (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});


// 3️⃣ POST Create Student
app.post('/student', (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        dob: req.body.dob,
        college: req.body.college,
        course: req.body.course
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student created successfully",
        student: newStudent
    });
});


// 4️⃣ PUT Update Student
app.put('/student/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = req.body.name;
    student.dob = req.body.dob;
    student.college = req.body.college;
    student.course = req.body.course;

    res.json({
        message: "Student updated successfully",
        student: student
    });
});


// 5️⃣ DELETE Student
app.delete('/student/:id', (req, res) => {

    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully"
    });
});


// Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});