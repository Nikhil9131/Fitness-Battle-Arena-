const express = require("express");
const app = express();
app.use(express.json());
let data = [
  { id: 1, name: "vishal", age: 22 },
  { id: 2, name: "devendan", age: 21 },
];
app.get("/students", (req, res) => {
  res.json(data);
});
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = data.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({
      message: "Student Not Found",
    });
  }
  res.json(student);
});

app.post("/students", (req, res) => {
  const newStudent = {
    id: data.length+1,
    name: req.body.name,
    age: req.body.age,
  };
  data.push(newStudent);
  res.status(201).json({
    message: "Student Added",
  });
});
app.listen(2000);