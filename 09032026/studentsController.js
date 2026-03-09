exports.getAllStudents = (req,res) => {
    res.json([
  { id: 1, name: "Prajwal", dob: "2003-05-10", college: "ATME College", course: "AIML" },
  { id: 2, name: "Rahul", dob: "2002-08-15", college: "MIT Mysore", course: "CSE" },
  { id: 3, name: "Anjali", dob: "2003-02-20", college: "ATME College", course: "ISE" }
])
};

const createStudent = (req,res) => {
    const student = req.body;
    //Here you would typically save the student to a database
    res.json({message: ' '})
}
module.exports = {
    getAllStudents
};
