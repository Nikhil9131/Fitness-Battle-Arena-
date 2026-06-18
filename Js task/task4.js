const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];

const salaries = employees.map(emp => emp.salary);
const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);

console.log(salaries);
console.log(totalSalary);