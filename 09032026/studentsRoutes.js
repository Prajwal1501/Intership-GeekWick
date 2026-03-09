const express = require('express');
const router = express.Router();

// Sample Routes of students

//controller init
const studentsController = require('../controllers/studentsController.js')
//to get all students
router.get('/students', studentController.getAllStudents);

module.exports = router;