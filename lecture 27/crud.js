const express = require("express");

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Amit", age: 21 }
];

// GET All Students
app.get("/students", (req, res) => {
    res.json(students);
});

// GET Single Student
app.get("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === parseInt(req.params.id)
    );

    if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    res.json(student);
});

// POST Student
app.post("/students", (req, res) => {

    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(student);

    res.status(201).json(student);

});

// PUT Student
app.put("/students/:id", (req, res) => {

    const student = students.find(
        s => s.id === parseInt(req.params.id)
    );

    if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    student.name = req.body.name;
    student.age = req.body.age;

    res.json(student);

});

// PATCH Student
app.patch("/students/:id", (req, res) => {

    const student = students.find(
        s => s.id === parseInt(req.params.id)
    );

    if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    if (req.body.name) {
        student.name = req.body.name;
    }

    if (req.body.age) {
        student.age = req.body.age;
    }

    res.json(student);

});

// DELETE Student
app.delete("/students/:id", (req, res) => {

    const index = students.findIndex(
        s => s.id === parseInt(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    students.splice(index, 1);

    res.json({
        message: "Student Deleted"
    });

});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});