const students = [
  { name: "John", marks: 80 },
  { name: "Emma", marks: 40 },
  { name: "Alex", marks: 70 }
];

const passedStudents = students
  .filter(student => student.marks >= 50)
  .map(student => student.name);

console.log(passedStudents);